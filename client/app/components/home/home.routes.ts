import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home.component';
import { UserListComponent } from '../userlist/userlist.component';
import { UserNewComponent } from '../usernew/usernew.component';

import { AuthGuard } from '../../AuthGuard'; 

export const homeRoutes3=[    
    {
        path: '',
        redirectTo: 'userlist',
        pathMatch: 'full'
    }                 ,
            {
                path: 'userlist',
                component: UserListComponent
            },
            {
                path: 'usernew',
                component: UserNewComponent
            },
            {
                path: '**',
                redirectTo: 'userlist'
            }
        ];
    
/*
const homeRoutes3: Routes = [
    {
         children: [
            {
                path: '',
                redirectTo: '/userlist',
                pathMatch: 'full'
            },
            {
                path: 'userlist',
                component: UserListComponent
            },
            {
                path: 'usernew',
                component: UserNewComponent
            },
            {
                path: '**',
                redirectTo: '/userlist',
                pathMatch: 'full'
            }
        ]
    }
];*/
export const homeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [ AuthGuard ],
        children: [
            {
                path: '',
                redirectTo: 'userlist',
                pathMatch: 'full'
            },
            {
                path: 'userlist',
                component: UserListComponent
            },
            {
                path: 'usernew',
                component: UserNewComponent
            },
            {
                path: '**',
                redirectTo: 'userlist',
                pathMatch: 'full'
            }
        ]
    }
];
/*export const homeRoutingProviders: any[] = [ 
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);*/