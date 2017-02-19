import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestOptionsArgs, RequestMethod } from '@angular/http';

import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UsersService{

    private _listUsersUrl='http://localhost:3000/usersApi/listUsers';
    private _userUrl='http://localhost:3000/usersapi/user'
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

    public deleteUserById(userId: number): Observable<Response>{
        console.log("From usersSErvice ");
      
        let body={ "id": userId };
        let options= new RequestOptions({
            body: body,
            method: RequestMethod.Delete
        });
        return this._http.request(this._userUrl, options);
    }

    public addNewUser(user: User): Observable<Response>{
        console.log("From users.service :"+user);
        let body={
            "data" : user
        };
        let options= new RequestOptions({
            body: body,
            method: RequestMethod.Post
        });
        return this._http.request(this._userUrl, options);
    }
}