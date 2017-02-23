import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserNewComponent } from './usernew.component';

@Injectable()
export class UserNewCanDeactivateGuard implements CanDeactivate<UserNewComponent>{
    
    canDeactivate(
        component: UserNewComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<boolean> | boolean{

           // console.log("UserNewDeactivateGuard constructor");
            //console.log(component._allPristine);
            //return true;            
            component.modalDialog.onClose.subscribe((val)=>this._onClose(val));

            component.modalDialog.onDismiss.subscribe((val)=>this._onDismiss(val));

             component.modalDialog.open();

            //return component.isAllPristine();
        }                  

        private _onClose(val: any): boolean{
            return true;
        }

        private _onDismiss(val: any): boolean{
            return false;
        }

}