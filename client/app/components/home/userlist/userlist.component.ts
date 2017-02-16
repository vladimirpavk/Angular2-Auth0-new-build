/// <reference path="../../../../../node_modules/@angular/common/index.d.ts" />
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service/users.service';
import { User } from '../../../services/users.service/user';

let __moduleName: any;

@Component({
    moduleId: __moduleName,
    selector: 'userlist',
    templateUrl: 'userlist.component.html'  ,
})
export class UserListComponent implements OnInit{
    
    private _messageH2: string;
    private _users: Array<User>;

    constructor(private _usersService: UsersService){

    }

    ngOnInit(){
        this._messageH2="User List Component";

        this._usersService.getAllUsers().subscribe(
                users => this._users = users,
                err => console.log(err.status),
                () => {
                    console.log('Request Complete');
                    console.log(this._users);
                }
            );
        }
}