/// <reference path="../../../../../node_modules/@angular/common/index.d.ts" />
import { Component, OnInit, Input } from '@angular/core';

let __moduleName: any;

@Component({
    moduleId: __moduleName,
    selector: 'popup',    
    templateUrl: 'popup.component.html',
    styleUrls: ['popup.component.css']
})
export class PopUpComponent implements OnInit{

    @Input() setTimeout: number= 2000;
    @Input() popUpText: string = "All of these elements will be faded out using a CSS3 opacity transition.";
    @Input() ok: boolean = false;

    private _title:string;
    private isShown: boolean = true;

    constructor(){}

    ngOnInit(){
        this._title="PopUp Component";
    }    

    public buttonClicked(): void{
        this.isShown=!this.isShown;

        setTimeout(()=> {            
            this.isShown=!this.isShown;        
        }, this.setTimeout);
    }
}