import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestOptionsArgs, RequestMethod, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UsersService{

    private _listUsersUrl='http://localhost:3000/usersApi/listUsers';
    private _userUrl='http://localhost:3000/usersapi/user'
    
    private id_token: string;

    constructor(private _http: Http){       
        this.id_token=localStorage.getItem('id_token');
    }

    private extractData(res: Response){
        let body=res.json();       
        return body || {};
    }   

    public getAllUsers(id_token: string): Observable<User[]>{              

        let headers=new Headers({
           "Authorization": "BEARER "+id_token
        });

        let options= new RequestOptions({
             headers: headers,
             method: RequestMethod.Get
        });
           
        return this._http.request(this._listUsersUrl, options).map(this.extractData);                          
    }

    public deleteUserById(userId: number): Observable<Response>{        
      
        let body={ "id": userId };
        let options= new RequestOptions({
            body: body,
            method: RequestMethod.Delete
        });
        return this._http.request(this._userUrl, options);
    }

    public addNewUser(user: User): Observable<Response>{

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