import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

//3-rd party components
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

//services
import { AuthService } from '../../../services/auth.service/auth.service';
import { UsersService } from '../../../services/users.service/users.service';

//model
import { User } from '../../../services/users.service/user';

let __moduleName: any;

@Component({
    moduleId: __moduleName,
    selector: 'usernew',
    templateUrl: 'usernew.component.html'    
})
export class UserNewComponent implements OnInit{
    
    @ViewChild('idSpy') idSpy;
    @ViewChild('nameSpy') nameSpy;
    @ViewChild('lastnameSpy') lastnameSpy;
    @ViewChild('pictSpy') pictSpy;

    @ViewChild('modal') modalDialog: ModalComponent;

    private _messageH2: string;
    private _formUser: User;
    private _formSubmitted: boolean;
    public _allPristine: boolean | string ="Nista";

    public buttonClicked:EventEmitter<boolean>;
 
    constructor(private _authService: AuthService,
                private _usersService: UsersService,
                private _router: Router
    ){

    }

    ngOnInit(){
        this._messageH2="User New Component";
        this._formUser=new User();
 
       this.buttonClicked=new EventEmitter<boolean>();     
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
                }
            );
        }
        this._formSubmitted=true;      
    }

    public isAllPristine(): boolean{
        return this.idSpy.pristine && this.nameSpy.pristine && this.lastnameSpy.pristine && this.pictSpy.pristine;
    }

    public modalAnyButtonClicked(buttonNum: number): void{
        this.modalDialog.close();
       if(buttonNum==1) this.buttonClicked.emit(false);   
      else this.buttonClicked.emit(true); 
    };
}