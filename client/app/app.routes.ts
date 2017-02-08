import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { AuthGuard } from './AuthGuard';
import { AuthGuard2 } from './AuthGuard2';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PleaseLoginComponent } from './components/pleaselogin/pleaselogin.component';
import { UserListComponent } from './components/userlist/userlist.component';
import { UserNewComponent } from './components/usernew/usernew.component';

import { homeRoutes3 } from './components/home/home.routes';

//When we use PathLocationStrategy
const appRoutes: Routes = [  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: PleaseLoginComponent, canActivate: [ AuthGuard2 ] },  
  //{ path: 'userlist', component: UserListComponent, canActivate: [AuthGuard] },
  //{ path: 'usernew', component: UserNewComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [ AuthGuard ], children: homeRoutes3 },
  { path: 'pnf', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'pnf', pathMatch: 'full'}
];

export const appRoutingProviders: any[] = [ 
  AuthGuard,
  AuthGuard2
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);