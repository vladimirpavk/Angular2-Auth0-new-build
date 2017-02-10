import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service/auth.service';

let __moduleName: any;

@Component({
    moduleId: __moduleName,
    selector: 'usernew',
    templateUrl: 'usernew.component.html'    
})
export class UserNewComponent implements OnInit{
    
    private _messageH2: string;

    constructor(private _authService: AuthService){

    }

    ngOnInit(){
        this._messageH2="User New Component";
    }
}