/// <reference path="../../../../../node_modules/@angular/common/index.d.ts" />
import { Component, OnInit, ViewChild } from '@angular/core';
//import { PopUpComponent } from '../../shared/popup/popup.component';
import { FlashBoxComponent } from 'commoncomponents/components/flashbox.component';

import { UsersService } from '../../../services/users.service/users.service';
import { User } from '../../../services/users.service/user';

let __moduleName: any;

@Component({
    moduleId: __moduleName,
    selector: 'userlist',
    templateUrl: 'userlist.component.html',   

})
export class UserListComponent implements OnInit{
    
    private _messageH2: string;
    private _users: Array<User>;

    @ViewChild("pup_ok") popUpComponentOk: FlashBoxComponent;
    @ViewChild("pup_not_ok") popUpComponentNotOk: FlashBoxComponent;

    @ViewChild("pup_deleted_ok") popUpComponentDeletedOk: FlashBoxComponent;
    @ViewChild("pup_deleted_not_ok") popUpComponentDeletedNotOk: FlashBoxComponent;


    constructor(private _usersService: UsersService,
    ){

    }

    ngOnInit(){
        console.log("Userlist component ngOnInit");
        this._messageH2="User List Component";
        this._getUserList(localStorage.getItem("id_token"));
        }

        private _getUserList(token: string):void{
             this._usersService.getAllUsers().subscribe(
                users => 
                {
                    this._users = users;
                    //console.log(this._users);
                },
                err => {
                    console.log(err.status);
                    this.popUpComponentNotOk.flashOnce();
                },
                () => {
                    //console.log('getAllUsersRequest Complete');       
                    this.popUpComponentOk.flashOnce();         
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
                err=>{                    
                    console.log("User delete error: "+err);
                    this.popUpComponentDeletedNotOk.flashOnce();
                },
                 () => {
                    //console.log('Request Complete');
                    //console.log(this._users);
                    this.popUpComponentDeletedOk.flashOnce();
                }
            );
        
        }
            
}