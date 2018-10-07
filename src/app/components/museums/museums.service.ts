import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../../environments/environment';
import { Observable, of }  from 'rxjs';

@Injectable()

export class MuseumsService {

  constructor (
    private http: HttpClient
    ) {
    console.log('Content service loaded')
  }

  getAll() {
    return Observable.create(observer => {
      this.http.get('/api/museums').subscribe(data => {
        delete data['default']
        observer.next(data)
        observer.complete()
      }, error => {
        observer.error(error)
        observer.complete()
      });
    })
  }

  findByKeyword(keyword: string) {
    return Observable.create(observer => {
      this.getAll().subscribe(data => {
        var museums = Object.keys(data).map(k => data[k])
        for (let t of museums) {
          if (t.keyword.toLowerCase() == keyword) {
            observer.next(t)
            observer.complete()
            return
          }
        }
        observer.error("no-match")
        observer.complete()
      }, error => {
        observer.error(error)
        observer.complete()
      });
    })
  }


}