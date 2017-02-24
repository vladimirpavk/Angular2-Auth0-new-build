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

    constructor(private _authService: AuthService,
                private _usersService: UsersService,
                private _router: Router
    ){

    }

    ngOnInit(){
        this._messageH2="User New Component";
        this._formUser=new User();
       // this._formSubmitted=false;

       this.yesButtonClicked=new EventEmitter<boolean>();
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

    private save_Clicked(){
        let allPristine: boolean = this.isAllPristine();
        console.log(allPristine);
    }

    private modalOpen(): void{
        
       /* this.modalDialog.onClose.subscribe((val)=>{
            console.log("Modal Dialog on close");
        });

        this.modalDialog.onDismiss.subscribe((val)=>{
            console.log("Modal dialog on dismiss");
        });

        this.modalDialog.onOpen.subscribe((val)=>{
            console.log("Modal dialog on open.");
        })*/
        

        //this.modalDialog.open();    
    }

    /*public modalAnyButtonClicked(buttonNum: number): Promise<boolean>{
        this.modalDialog.close();
        console.log(buttonNum);

        return new Promise((resolve, reject)=>{
            if(buttonNum==2){
                resolve(true);
            }
            else
            {
                resolve(false);
            }

        });*/

        public yesButtonClicked:EventEmitter<boolean>;

        public yesButtonClick(): void{
            this.yesButtonClicked.emit(true);
        }

        }
    }   

}