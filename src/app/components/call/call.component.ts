import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title, DomSanitizer } from '@angular/platform-browser';

@Component({
  templateUrl: 'call.component.html',
  styleUrls: ['call.component.scss'],
})

export class CallComponent implements OnInit {

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



