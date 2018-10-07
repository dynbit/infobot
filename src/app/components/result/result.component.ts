import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title, DomSanitizer } from '@angular/platform-browser';
import { AppConfig } from '../../../environments/environment';

import { ResultService } from './result.service';

import loadImage from 'image-promise';

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
  public sub;
  public iFrameLink;
  private loadIframe;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private meta: Meta,
    private title: Title,
    private resultService: ResultService,
  ) {}


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onIframeLoad(event) {

    if (this.loadIframe) {
      this.isLoading = false;
    }

  }

	ngOnInit() {

    this.route.params
    .subscribe((params) => {  
      console.log(params)
    });

    this.iFrameLink = this.sanitizer.bypassSecurityTrustResourceUrl('http://visit.kaunas.lt/en/to-see/museums-and-galleries/museum/lithuanian-open-air-folk-museum/');
    
    setTimeout(() => {
      this.loadIframe = true;
    }, 500)

    // this.resultService.getResult('test').subscribe(data => {

    //   this.result = new Result(data);

    //   let apiKey = AppConfig.googleMapsAPIkey;
    //   let mapLink = `https://www.google.com/maps/embed/v1/place?q=${this.result.address}&key=${apiKey}`
    //   let imagesToLoad = []; 

    //   this.mapLink = this.sanitizer.bypassSecurityTrustResourceUrl(mapLink);

    //   this.result.photos.forEach(image => {

    //     let imagePromise = loadImage(image).catch(function () {
    //       console.error('Image failed to load :(');
    //     });

    //     imagesToLoad.push(imagePromise)

    //   })

    //   Promise.all(imagesToLoad).then(result => {
    //     this.isLoading = false;
    //   })

    // }, error => {
    //   console.error(error)
    // });


	}

}



