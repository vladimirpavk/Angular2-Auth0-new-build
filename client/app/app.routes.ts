import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { AuthGuard } from './AuthGuard';

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
  //{ path: 'userlist', component: UserListComponent, canActivate: [AuthGuard] },
  //{ path: 'usernew', component: UserNewComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent,canActivate: [ AuthGuard ] },
  { path: 'pnf', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'pnf', pathMatch: 'full'}
];

export const appRoutingProviders: any[] = [ 
  AuthGuard  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);