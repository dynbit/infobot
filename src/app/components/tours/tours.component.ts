import { switchMap } from 'rxjs/operators';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Meta, Title, DomSanitizer } from '@angular/platform-browser';

import { ToursService } from './tours.service';

@Component({
  templateUrl: 'tours.component.html'
})

export class ToursComponent implements OnInit {

  public keyword;
  public matchedTour;
  public tours;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toursService: ToursService,
  ) {}

	ngOnInit() {

    this.keyword = this.route.snapshot.paramMap.get('keyword')

    this.toursService.getAll().subscribe(data => {
      this.tours = JSON.stringify(data, null, 2)
    }, error => {
      console.error(error)
    });

    this.toursService.findByKeyword(this.keyword).subscribe(data => {
      this.matchedTour = JSON.stringify(data, null, 2)
    }, error => {
      console.error(error)
    });
  }
}




