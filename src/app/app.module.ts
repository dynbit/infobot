// import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CallComponent } from './components/call/call.component';
import { ResultComponent } from './components/result/result.component';
import { ToursComponent } from './components/tours/tours.component';
import { MuseumsComponent } from './components/museums/museums.component';
import { KebabsComponent } from './components/kebabs/kebabs.component';


import { ResultService } from './components/result/result.service';
import { ToursService } from './components/tours/tours.service';
import { MuseumsService } from './components/museums/museums.service';
import { KebabsService } from './components/kebabs/kebabs.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    CallComponent,
    HomeComponent,
    ResultComponent,
    WebviewDirective,
    ToursComponent,
    MuseumsComponent,
    KebabsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  providers: [
    ResultService,
    ToursService,
    MuseumsService,
    KebabsService,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
