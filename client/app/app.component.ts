/// <reference path="../../node_modules/@angular/common/index.d.ts" />
var __moduleName: any;

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service/auth.service';

@Component({
  moduleId: __moduleName,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ RouterModule ]
})
export class AppComponent { 

  private _pageTitle: string;
  
  constructor(/*private _authService: AuthService*/){
    this._pageTitle="Angular2-Auth0 - Sample application";
  }

}