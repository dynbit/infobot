import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../../environments/environment';
import { Observable, of, empty }  from 'rxjs';

// import { Tour }       from './app/tour';

@Injectable()

export class ToursService {

  constructor (
      private http: HttpClient
  ) {
    console.log('Content service loaded')
  }

  getAll() {
    return this.http.get('/api/tours')
  }

  findByKeyword(keyword: string) {
    return Observable.create(observer => {
      this.getAll().subscribe(data => {
        var tours = Object.keys(data).map(k => data[k])


        for (let t of tours) {
          if t.keyword == keyword {
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
    }
  }

}