/// <reference path="../../node_modules/@angular/common/index.d.ts" />
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';

import { routing, appRoutingProviders } from './app.routes';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent,
                  LoginComponent,
                  PageNotFoundComponent,
                  HomeComponent
             ],
  bootstrap:    [ AppComponent ],
  providers: [ {
                  provide: LocationStrategy,
                  useClass: PathLocationStrategy
             }]
})
export class AppModule { }