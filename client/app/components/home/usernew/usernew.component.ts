import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
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
    private _formUser: User;
    private _formSubmitted: boolean;

    constructor(private _authService: AuthService,
                private _usersService: UsersService,
                private _router: Router
    ){

    }

    ngOnInit(){
        this._messageH2="User New Component";
        this._formUser=new User();
       // this._formSubmitted=false;
    }

    private addNewUserClicked(event): void{
        console.log(event);
        if(!this._formSubmitted){
            this._usersService.addNewUser(this._formUser).subscribe(        
                response=>{
                   console.log("From response addnewuser: "+response)
                },
                err=>console.log("From error: "+err),
                 () => {
                    console.log('Request Complete');
                    this._router.navigate(['/home/userlist']);
                    //console.log(this._users);
                }
            );
        }
        this._formSubmitted=true;
        //console.log(event);
        //console.log(this._formUser);
         /*this._usersService.addNewUser(
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
            );*/
    }
}