import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthGuard2 implements CanActivate{
    
    constructor(private _router: Router){}

    canActivate(){
        
        if(tokenNotExpired()) 
        {   
            console.log('AuthGuard2 true');
            this._router.navigate['/home'];
            return false;
        }

        console.log('AuthGuard2 false');        
        return true;

    }
}
