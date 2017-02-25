import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserNewComponent } from './usernew.component';

@Injectable()
export class UserNewCanDeactivateGuard implements CanDeactivate<UserNewComponent>{
    
    canDeactivate(
        component: UserNewComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<boolean> | boolean{

            if(component.isAllPristine()){
                return true;
            }

            component.modalDialog.open();
            
            return new Promise((resolve, reject)=>{
                     component.buttonClicked.subscribe((val)=>
                    {
                        resolve(val);
                    })
            });

        }                  

        private _onClose(val: any): boolean{
            return true;
        }

        private _onDismiss(val: any): boolean{
            return false;
        }

}