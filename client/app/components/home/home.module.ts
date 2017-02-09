import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { UserListComponent } from './userlist/userlist.component';
import { UserNewComponent } from './usernew/usernew.component';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    imports: [ HomeRoutingModule ],
    declarations: [       
        HomeComponent,
        UserListComponent,
        UserNewComponent
    ],
    bootstrap: [ HomeComponent ]
})
export class HomeModule {}