import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title, DomSanitizer } from '@angular/platform-browser';

import { MuseumsService } from './museums.service';

@Component({
  templateUrl: 'museums.component.html'
})

export class MuseumsComponent implements OnInit {

  public keyword;
  public matchedMuseum;
  public museums;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private museumsService: MuseumsService,
  ) {}

	ngOnInit() {
    this.keyword = this.route.snapshot.paramMap.get('keyword')

    this.museumsService.getAll().subscribe(data => {
      this.museums = JSON.stringify(data, null, 2)
    }, error => {
      console.error(error)
    });

    this.museumsService.findByKeyword(this.keyword).subscribe(data => {
      this.matchedMuseum = JSON.stringify(data, null, 2)
    }, error => {
      console.error(error)
    });
  }

}




