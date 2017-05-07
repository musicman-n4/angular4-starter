import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  Resolve,
  CanLoad,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { HomeComponent } from './home.component';

@Injectable()
export class GuardsHomeService implements CanActivate, CanActivateChild, CanLoad, CanDeactivate<HomeComponent> {

  constructor() { }

  canActivate(): boolean {
    console.log('GuardsHomeService.canActivate()');
    return true;
  }

  canActivateChild(): boolean {
    console.log('GuardsHomeService.canActivateChild()');
    return true;
  }

  canDeactivate(): boolean {
    console.log('GuardsHomeService.canDeactivate()');
    return true;
  }

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<HomeComponent> {
  //   console.log('GuardsHomeService.resolve()');
  //   console.log(route);
  //   console.log(state);
  //   return null;
  // }

  canLoad(): boolean {
    console.log('GuardsHomeService.canLoad()');
    return true;
  }
}
