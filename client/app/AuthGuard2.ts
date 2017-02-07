import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { Location } from '@angular/common';

@Injectable()
export class AuthGuard2 implements CanActivate{
    
    constructor(private _router: Router,
                private _location: Location){}

    canActivate(){
        
        if(tokenNotExpired()) 
        {   
            console.log('AuthGuard2 true');
            let path=this._location.path(true);
            this._router.navigate(['/home']);
            return false;
        }

        console.log('AuthGuard2 false');        
        return true;

    }
}
