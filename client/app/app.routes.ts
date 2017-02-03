import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';

//When we use PathLocationStrategy
const appRoutes: Routes = [  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },  
  { path: 'home', component: HomeComponent },
  { path: 'pnf', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'pnf', pathMatch: 'full'}
];

export const appRoutingProviders: any[] = [   
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);