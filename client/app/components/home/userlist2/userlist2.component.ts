/// <reference path="../../../../../node_modules/@angular/common/index.d.ts" />
import { Component, OnInit } from '@angular/core';

let __moduleName: any;

@Component({
    moduleId: __moduleName,
    selector: 'userlist2',
    templateUrl: 'userlist2.component.html'
})
export class UserListComponent2 implements OnInit{
    
    private _messageH2: string;    

    constructor(){

    }

    ngOnInit(){        
        this._messageH2="User List2 Component";      
        }      
            
}