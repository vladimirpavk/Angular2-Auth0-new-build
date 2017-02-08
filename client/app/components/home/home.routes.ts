import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home.component';
import { UserListComponent } from '../userlist/userlist.component';
import { UserNewComponent } from '../usernew/usernew.component';


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
];
/*const homeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
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
export const homeRoutingProviders: any[] = [ 
];

//export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);