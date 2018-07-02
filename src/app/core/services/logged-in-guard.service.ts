import { UsersService } from './users.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class LoggedInGuardService implements CanActivate {

  constructor(private service: UsersService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.service.isLoggedIn();
  }

}
