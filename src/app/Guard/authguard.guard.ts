import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoggingService } from '../services/logging.service';
@Injectable({
  providedIn: 'root',
})
export class AuthguardGuard
  implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad
{
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem('success')) {
      return true;
    } else {
      Swal.fire({
        title: 'Oops',
        text: 'Do you want to continue? please Login first',
        icon: 'error',
        confirmButtonText: 'Cool',
        background: '#555',
        color: 'white',
        confirmButtonColor: '#fd7e14',
      });
      this.routess.navigate(['/signin']);
      return false;
    }
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
  constructor(private log: LoggingService, private routess: Router) {}
}
