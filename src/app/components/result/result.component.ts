import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title, DomSanitizer } from '@angular/platform-browser';

@Component({
  templateUrl: 'result.component.html',
  styleUrls: ['result.component.scss'],
})

export class ResultComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private meta: Meta,
    private title: Title,
  ) {}

	ngOnInit() {


	}

}



