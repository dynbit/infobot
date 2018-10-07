import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title, DomSanitizer } from '@angular/platform-browser';

import { ToursService } from './tours.service';

@Component({
  templateUrl: 'tours.component.html'
})

export class ToursComponent implements OnInit {

  public keyword;
  public matchedTour;
  public tours;
  public sub;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toursService: ToursService,
  ) {}

	ngOnInit() {
    this.toursService.getAll().subscribe(data => {
      this.tours = JSON.stringify(data, null, 2)
    }, error => {
      console.error(error)
    });

    var self = this
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // console.log(this.route.snapshot.queryParamMap.getAll())
        this.keyword = params['keyword'];

        this.toursService.findByKeyword('salty').subscribe(data => {
          self.matchedTour = JSON.stringify(data, null, 2)
        }, error => {
          console.error(error)
        });
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}




