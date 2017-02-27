/// <reference path="../../../../../node_modules/@angular/common/index.d.ts" />
import { Component, OnInit } from '@angular/core';

let __moduleName: any;

@Component({
    moduleId: __moduleName,
    selector: 'popup',    
    templateUrl: 'popup.component.html'
})
export class PopUpComponent implements OnInit{

    private _title:string;

    constructor(){}

    ngOnInit(){
        this._title="PopUp Component";
    }
}