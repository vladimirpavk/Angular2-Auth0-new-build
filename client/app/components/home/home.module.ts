import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//ng2-bs3-module
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

//home module components
import { HomeComponent } from './home.component';
import { UserListComponent } from './userlist/userlist.component';
import { UserNewComponent } from './usernew/usernew.component';

//shared components
//import { PopUpComponent } from './popup/popup.component';
//import { SharedModule } from '../shared/shared.module';
import { CommonComponentsModule } from 'commoncomponents';

//routing
import { HomeRoutingModule } from './home-routing.module';

//providers
import { AUTH_PROVIDERS } from 'angular2-jwt';

//services
import { AuthService } from '../../services/auth.service/auth.service';
import { UsersService } from '../../services/users.service/users.service';

import { PathLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
    imports: [   
        CommonComponentsModule,             
        Ng2Bs3ModalModule,
        FormsModule,
        HttpModule,
        BrowserModule,
        HomeRoutingModule ],
    declarations: [                               
        HomeComponent,
        UserListComponent,
        UserNewComponent
    ],
    providers: [
        AUTH_PROVIDERS,    
        {   
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        },
        {
            provide: AuthService,
            useClass: AuthService
        },
        {
            provide: UsersService,
            useClass: UsersService
        }
    ],
    exports: [ HomeRoutingModule ],
    bootstrap: [ HomeComponent ]
})
export class HomeModule {}