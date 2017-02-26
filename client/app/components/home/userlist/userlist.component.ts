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

    constructor(private _usersService: UsersService,
    ){

    }

    ngOnInit(){
        console.log("Userlist component ngOnInit");
        this._messageH2="User List Component";
        this._getUserList(localStorage.getItem("id_token"));
        }

        private _getUserList(token: string):void{
             this._usersService.getAllUsers(token).subscribe(
                users => 
                {
                    this._users = users;
                    console.log(this._users);
                },
                err => console.log(err.status),
                () => {
                    console.log('getAllUsersRequest Complete');                
                }
            );
        }

        public trash_clicked(userId: number): void{
            console.log(userId);

            this._usersService.deleteUserById(userId).subscribe(
                response=>{
                    console.log("From response: "+response);
                    this._users=this._users.filter(
                        (element)=>{
                           return element.id!=userId;
                        });                    
                },
                err=>console.log("From error: "+err),
                 () => {
                    console.log('Request Complete');
                    console.log(this._users);
                }
            );
        
        }
            
}