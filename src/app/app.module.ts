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

import { ResultService } from './components/result/result.service';
import { ToursService } from './components/tours/tours.service';
import { MuseumsService } from './components/museums/museums.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { InMemoryToursService }  from './in-memory-tours.service';
import { InMemoryMuseumsService } from './in-memory-museums.service';


@NgModule({
  declarations: [
    AppComponent,
    CallComponent,
    HomeComponent,
    ResultComponent,
    WebviewDirective,
    ToursComponent,
    MuseumsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryToursService, { dataEncapsulation: false }
    ),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryMuseumsService, { dataEncapsulation: false }
    ),
    AppRoutingModule,
  ],
  providers: [
    ResultService,
    ToursService,
    MuseumsService,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
