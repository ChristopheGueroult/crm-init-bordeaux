import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {ComponentCanDeactivate} from './can-desactivate.class';

@Injectable({
  providedIn : 'root'
})
export class CanDeactivateGuard implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(component: ComponentCanDeactivate): boolean {

    if (!component.canDeactivate()) {
        if (confirm('You have unsaved changes! If you leave, your changes will be lost.')) {
            return true;
        } else {
            return true;
        }
    }
    return true;
  }
}
