/// <reference path="../../node_modules/@angular/common/index.d.ts" />
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { PleaseLoginComponent } from './components/pleaselogin/pleaselogin.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';

//guards
import { AuthGuard } from './AuthGuard';
import { AuthGuard2 } from './AuthGuard2';

export const mainRoutes: Routes = [ 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: PleaseLoginComponent, canActivate: [ AuthGuard2 ] },   
  //{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'pnf', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'pnf', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(mainRoutes)
    ],
    providers: [
        AuthGuard,
        AuthGuard2
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}