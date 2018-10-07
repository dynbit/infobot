import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title, DomSanitizer } from '@angular/platform-browser';

import { KebabsService } from './kebabs.service';

@Component({
  templateUrl: 'kebabs.component.html'
})

export class KebabsComponent implements OnInit {

  public keyword;
  public matchedKebab;
  public kebabs;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private kebabsService: KebabsService,
  ) {}

	ngOnInit() {
    this.keyword = this.route.snapshot.paramMap.get('keyword')

    this.kebabsService.getAll().subscribe(data => {
      this.kebabs = JSON.stringify(data, null, 2)
    }, error => {
      console.error(error)
    });

    this.kebabsService.findByKeyword(this.keyword).subscribe(data => {
      this.matchedKebab = JSON.stringify(data, null, 2)
    }, error => {
      console.error(error)
    });
  }

}




