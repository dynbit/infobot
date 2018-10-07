import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title, DomSanitizer } from '@angular/platform-browser';

import { KebabsService } from './kebabs.service';

@Component({
  templateUrl: 'kebabs.component.html'
})

export class KebabsComponent implements OnInit {

  public kebabsJsonString;

  constructor(
    private kebabsService: KebabsService,
  ) {}

	ngOnInit() {
    this.kebabsService.getAll().subscribe(data => {
      this.kebabsJsonString = JSON.stringify(data, null, 2)
    }, error => {
      console.error(error)
    });
  }

}




