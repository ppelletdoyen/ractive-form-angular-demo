import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from '../../../shared/model/user';
import { Observable } from 'rxjs/Observable';
import { UserApiService } from './user-api.service';
import { Subscription } from 'rxjs/Subscription';
import { delay } from 'rxjs/operators';

@Injectable()
export class UserDetailResolveService implements Resolve<User> {

  detailEvents: Subscription;

  constructor(private service: UserApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.service.get(+route.paramMap.get('id')).pipe(delay(1000));
  }

  onDestroy() {
    if (this.detailEvents) {
      this.detailEvents.unsubscribe();
    } 
  }

}
