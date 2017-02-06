/// <reference path="../../../../node_modules/@angular/common/index.d.ts" />

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../../services/auth.service/auth.service';

let __moduleName: any;

@Component({
    moduleId: __moduleName,    
    selector: 'pleaselogin',
    templateUrl: 'pleaselogin.component.html'
}) 
export class PleaseLoginComponent implements OnInit{

    private _loginMessage: string;

    constructor(private _authService: AuthService,
                private _router: Router,
                private _location: Location
    ){
        this._authService.auth.subscribe((any)=>{
            console.log("From event handler...");
            let path=this._location.path(false);
            console.log(path);
            this._router.navigate(['userlist']);}
            );
    }

    ngOnInit(){
        this._loginMessage="Please login...";
    }

}