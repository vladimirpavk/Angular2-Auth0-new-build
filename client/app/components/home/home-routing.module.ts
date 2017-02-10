import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { UserListComponent } from './userlist/userlist.component';
import { UserNewComponent } from './usernew/usernew.component';

import { AuthGuard } from '../../AuthGuard';

export const homeRoutes: Routes = [ 
{ 
   path: 'home', component: HomeComponent, canActivate: [AuthGuard], children:
   [
        { path: '', redirectTo: 'userlist', pathMatch: 'full' },
        { path: 'userlist', component: UserListComponent },
        { path: 'usernew',  component: UserNewComponent },
        { path: '**', redirectTo: 'userlist' }
   ]
}
];

@NgModule({
    imports: [
        RouterModule.forRoot(homeRoutes)
    ],
    providers: [ AuthGuard ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule {}

