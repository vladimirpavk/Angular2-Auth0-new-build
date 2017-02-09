import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './userlist/userlist.component';
import { UserNewComponent } from './usernew/usernew.component';

export const homeRoutes: Routes = [ 
   { path: '', redirectTo: 'userlist', pathMatch: 'full' },
   { path: 'userlist', component: UserListComponent },
   { path: 'usernew',  component: UserNewComponent },
   { path: '**', redirectTo: 'userlist' }
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule {}

