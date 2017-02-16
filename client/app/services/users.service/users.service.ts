import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UsersService{

    private _listUsersUrl='http://localhost:3000/usersApi/listUsers';
    //private _usersUrl='server/client/app/js/users/users.json';

    constructor(private _authHttp: AuthHttp,
    private _http: Http){
        console.log("Users service constructor");

    }

    private extractData(res: Response){
        let body=res.json();       
        return body || {};
    }

    public getAllUsers2(): Observable<User[]>{        
        return this._authHttp.get(this._listUsersUrl).map(this.extractData);                          
    }

    public getAllUsers(): Observable<User[]>{    
        console.log("Client user.service - getAllUsers");   
        return this._http.get(this._listUsersUrl).map(this.extractData);                          
    }

}