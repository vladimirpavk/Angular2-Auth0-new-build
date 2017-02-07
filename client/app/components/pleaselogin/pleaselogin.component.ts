/// <reference path="../../../../node_modules/@angular/common/index.d.ts" />
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service/auth.service';
import { Router } from '@angular/router';
let __moduleName: any;

@Component({
    moduleId: __moduleName,    
    selector: 'pleaselogin',
    templateUrl: 'pleaselogin.component.html'
}) 
export class PleaseLoginComponent implements OnInit{

    private _loginMessage: string;

    constructor(private _authService: AuthService,
                private _router: Router
    ){     
    }

    ngOnInit(){
        this._loginMessage="Please login...";
    }

    private login(){        
        this._authService.login();
    }

}