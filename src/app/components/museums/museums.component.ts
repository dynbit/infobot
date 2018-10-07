import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title, DomSanitizer } from '@angular/platform-browser';

import { MuseumsService } from './museums.service';

@Component({
  templateUrl: 'museums.component.html'
})

export class MuseumsComponent implements OnInit {

  public museums;

  constructor(
    private museumsService: MuseumsService,
  ) {}

	ngOnInit() {
    this.museumsService.getAll().subscribe(data => {
      this.museums = JSON.stringify(data, null, 2)
    }, error => {
      console.error(error)
    });
  }

}




