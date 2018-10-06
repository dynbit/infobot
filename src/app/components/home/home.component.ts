import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title, DomSanitizer } from '@angular/platform-browser';

// import { AppComponent } from '../app.component';
// import { ContentService } from '../content.service';
// import { UserService, User } from '../user/user.service';
// import { ExtensionService } from '../extension/extension.service';
// import { SocialService } from '../social/social.service';
// import { TrackingService } from '../utils/tracking.service';

// import loadImage from 'image-promise';

// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition
// } from '@angular/animations';

class Item {

  public id;
  public image;
  public title;
  public description;
  public link;
  public origin;
  public liked;
  public favorite;
  public virality;
  public clicks;
  public likes;
  public images;
  public isLoaded;
  public gif;
  public palette;

  constructor(config = {}) {
    Object.assign(this, config);

    this.likes = this.likes || 0;
    this.images = this.images || [];
  }
}

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})

export class HomeComponent implements OnInit {

  //TODO: test local compiler by setting deleted param to private. It should fail - like on the server

  public item: Item = new Item();
  public fullLink;
  public deleted;
  public isShareOpen;
  public loadRibbon;
  public showCopySuccess;
  public fixControls;
  public fixControlsOffset;
  public controlsElementOffset;
  public embedLink;
  public similarItems;

  @ViewChild('controlsElement') controlsElement:ElementRef;
  @ViewChild('imagesElement') imagesElement:ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private meta: Meta,
    private title: Title,
  ) {}

	ngOnInit() {

	    const _self = this;

	    // this.userService.getUser().subscribe(data => {

	      // this.user = data;

	      this.route.paramMap.subscribe(params => {

	        //Temporary experimental navigation tweak
	        window.scrollTo(0, 0);

	        //Reset embed link
	        this.embedLink = false;

	        // this.contentService.getItem(params.get('shortUrl')).subscribe(data => {

	        //   //Redirect to particular item if slug was not specified
	        //   // if (!params.slug && data.id) {

	        //   //   let link = data.publicLink || data.link;
	        //   //   _self.router.navigate(['/', params.username, link.substr(link.lastIndexOf('/') + 1)]);

	        //   //   return;
	        //   // }

	        //   // if (!params.slug && !data.id) {
	        //   //   _self.router.navigate(['/', params.username, 'welcome']);
	        //   // }

	        //   this.item = new Item(data);
	        //   this.fullLink = window.location;

	        //   this.meta.addTag({ property: 'og:title', content: this.item.title });
	        //   this.meta.addTag({ property: 'og:image', content: this.item.image });
	        //   this.meta.addTag({ property: 'og:description', content: this.item.description });
	        //   this.title.setTitle(this.item.title + ' | Muzli');

	        //   //GA tracking on location change
	        //   _self.trackingService.trackPageView(this.router.url, this.title.getTitle())

	        //   //Create fake timeout to always show preloader on transition;
	        //   let fakeTimeoutPromise = new Promise((resolve) => {
	        //     setTimeout(() => {
	        //       resolve();
	        //     }, 500)
	        //   });


	        //   //Resolve firs image
	        //   let image = this.item.gif || this.item.images[0] || this.item.image;

	        //   let imagePromise = loadImage(image).catch(function () {

	        //     _self.item.images[0] = 'https://media.giphy.com/media/26AHteTfafcdKC6ys/giphy.gif';
	        //     _self.item.image = 'https://media.giphy.com/media/26AHteTfafcdKC6ys/giphy.gif';
	        //     _self.item.title = 'Ups... Image failed to load'

	        //     console.error('Image failed to load :(');
	        //   });

	        //   //Get similar items
	        //   this.loadSimilarItems(this.item.palette[0]);

	        //   Promise.all([imagePromise, fakeTimeoutPromise]).then(result => {

	        //   	console.log('item loaded')

	        //     this.item.isLoaded = true;
	        //     this.loadRibbon = true;
	        //     this.fixControls = false;
	        //   })

	        // }, error => {


	        //   if (error.status === 404) {

	        //     _self.loadRibbon = true;
	        //     _self.fixControls = false;

	        //     _self.item = new Item({
	        //       image: 'https://media.giphy.com/media/FPjbHO0jJxGsE/giphy.gif',
	        //       title: '',
	        //       isLoaded: true,
	        //     });
	        //   }

	        // });

	        
	      });

	    // })

	}

}



