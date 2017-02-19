import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//components
import { HomeComponent } from './home.component';
import { UserListComponent } from './userlist/userlist.component';
import { UserNewComponent } from './usernew/usernew.component';

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