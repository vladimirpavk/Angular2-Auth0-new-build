import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service/auth.service';

import { UsersService } from '../../../services/users.service/users.service';
import { User } from '../../../services/users.service/user';

let __moduleName: any;

@Component({
    moduleId: __moduleName,
    selector: 'usernew',
    templateUrl: 'usernew.component.html'    
})
export class UserNewComponent implements OnInit{
    
    private _messageH2: string;

    constructor(private _authService: AuthService,
                private _usersService: UsersService
    ){

    }

    ngOnInit(){
        this._messageH2="User New Component";
    }

    private addNewUserClicked(): void{
         this._usersService.addNewUser(
             { "id": 516,
               "name": "Dragica",
               "lastname": "Petkovic",
               "picture": "nemal"
            }
         ).subscribe(        
                response=>{
                   console.log("From response addnewuser: "+response)
                },
                err=>console.log("From error: "+err),
                 () => {
                    console.log('Request Complete');
                    //console.log(this._users);
                }
            );
    }
}