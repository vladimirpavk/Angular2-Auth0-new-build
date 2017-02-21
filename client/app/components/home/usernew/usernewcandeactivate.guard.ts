import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserNewComponent } from './usernew.component';

@Injectable()
export class UserNewCanDeactivateGuard implements CanDeactivate<UserNewComponent>{
    
    canDeactivate(
        component: UserNewComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<boolean> | boolean{

            console.log("UserNewDeactivateGuard constructor");

            console.log(component._allPristine);
            return true;

        }                  

}