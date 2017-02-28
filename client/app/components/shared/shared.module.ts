import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PopUpComponent } from './popup/popup.component';

@NgModule({           
    declarations: [        
        PopUpComponent
    ],
    exports: [ PopUpComponent ]
})
export class SharedModule {}