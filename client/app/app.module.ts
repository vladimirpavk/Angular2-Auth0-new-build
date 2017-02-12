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
import { RouterModule } from '@angular/router';

import { HomeModule } from './components/home/home.module';
import { AuthService } from './services/auth.service/auth.service';

@NgModule({
  imports:      [ 
                  BrowserModule,
                  RouterModule,
                  HomeModule,                
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
               },
               {
                 provide: AuthService,
                 useClass: AuthService
               }
             ]
})
export class AppModule { }