import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title, DomSanitizer } from '@angular/platform-browser';

import { ToursService } from './tours.service';

@Component({
  templateUrl: 'tours.component.html'
})

export class ToursComponent implements OnInit {

  public tours;

  constructor(
    private toursService: ToursService,
  ) {}

	ngOnInit() {
    this.toursService.getAll().subscribe(data => {
      this.tours = JSON.stringify(data, null, 2)
    }, error => {
      console.error(error)
    });
  }

}




