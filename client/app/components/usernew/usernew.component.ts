import { Component, OnInit } from '@angular/core';

let __moduleName: any;

@Component({
    moduleId: __moduleName,
    selector: 'usernew',
    templateUrl: 'usernew.component.html'    
})
export class UserNewComponent implements OnInit{
    
    private _messageH2: string;

    constructor(){

    }

    ngOnInit(){
        this._messageH2="User New Component";
    }
}