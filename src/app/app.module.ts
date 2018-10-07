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
import { ResultService } from './components/result/result.service';
import { ToursService } from './components/tours/tours.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { InMemoryToursService }  from './in-memory-tours.service';


@NgModule({
  declarations: [
    AppComponent,
    CallComponent,
    HomeComponent,
    ResultComponent,
    WebviewDirective,
    ToursComponent,
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
    AppRoutingModule,
  ],
  providers: [
    ResultService,
    ToursService,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
