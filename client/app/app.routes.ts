import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PleaseLoginComponent } from './components/pleaselogin/pleaselogin.component';
import { UserListComponent } from './components/userlist/userlist.component';
import { UserNewComponent } from './components/usernew/usernew.component';

//When we use PathLocationStrategy
const appRoutes: Routes = [  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: PleaseLoginComponent },  
  { path: 'userlist', component: UserListComponent },
  { path: 'usernew', component: UserNewComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pnf', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'pnf', pathMatch: 'full'}
];

export const appRoutingProviders: any[] = [   
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);