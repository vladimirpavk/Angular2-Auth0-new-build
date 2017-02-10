/// <reference path="../../node_modules/@angular/common/index.d.ts" />
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PleaseLoginComponent } from './components/pleaselogin/pleaselogin.component';

import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppRoutingModule } from './app-routing.module';
import { HomeRoutingModule } from './components/home/home-routing.module';

import { PathLocationStrategy, LocationStrategy } from '@angular/common';

import { HomeModule } from './components/home/home.module';

@NgModule({
  imports:      [ 
                  BrowserModule,
                  HomeModule,
                  HomeRoutingModule,
                  AppRoutingModule
                ],
  declarations: [ 
                  AppComponent,                             
                  PageNotFoundComponent,              
                  PleaseLoginComponent,                
             ],
  bootstrap: [ AppComponent ],
  providers: [          
               AUTH_PROVIDERS,
               {
                  provide: LocationStrategy,
                  useClass: PathLocationStrategy
               }
             ]
})
export class AppModule { }