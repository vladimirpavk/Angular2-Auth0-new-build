/// <reference path="../../node_modules/@angular/common/index.d.ts" />
var __moduleName: any;

import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service/auth.service';

@Component({
  moduleId: __moduleName,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ RouterModule, AuthService ]
})
export class AppComponent implements OnInit{ 

  private _pageTitle: string;
  private _loggedIn: boolean;

  constructor(private _authService: AuthService,
              private _router: Router){
    this._pageTitle="User Management Console";
  }

  ngOnInit(){
    this._loggedIn=this._authService.authenticated();
    if(this._loggedIn) this._router.navigate(['/userlist']);
  }

}