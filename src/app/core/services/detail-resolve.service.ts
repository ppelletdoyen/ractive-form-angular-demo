import { Observable } from 'rxjs/Observable';
import { UsersService } from './users.service';
import { User } from './../../shared/model/user';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class DetailResolveService implements Resolve<User> {

  constructor(private service: UsersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.service.get(+route.paramMap.get('id'));
  }

}
