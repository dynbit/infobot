import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title, DomSanitizer } from '@angular/platform-browser';

import { ResultService } from './result.service';

class Result {

  public photos;
  public title;
  public desc;
  public address;

  constructor(config = {}) {
    Object.assign(this, config);
    this.photos = this.photos || [];
  }
}

@Component({
  templateUrl: 'result.component.html',
  styleUrls: ['result.component.scss'],
})

export class ResultComponent implements OnInit {

  public result: Result = new Result();
  public isLoading = true;
  public mapLink;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private meta: Meta,
    private title: Title,
    private resultService: ResultService,
  ) {}

	ngOnInit() {


    this.resultService.getResult('test').subscribe(data => {

      this.result = new Result(data);

      let apiKey = 'AIzaSyB75oo2fsOL16tlYq-NRMh5XZr5pb4LFQ8'

      let mapLink = `https://www.google.com/maps/embed/v1/place?q=${this.result.address}&key=${apiKey}` 

      this.mapLink = this.sanitizer.bypassSecurityTrustResourceUrl(mapLink);

      this.isLoading = false;

    }, error => {
      console.error(error)
    });


	}

}



