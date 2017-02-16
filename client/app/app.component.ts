/// <reference path="../../node_modules/@angular/common/index.d.ts" />
var __moduleName: any;

import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: __moduleName,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{ 

  private _pageTitle: string;

  constructor(
  ){}
 
  ngOnInit(){   
    this._pageTitle="User Management Console"; 
  }

}