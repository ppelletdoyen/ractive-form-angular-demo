import { User } from './../../shared/model/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { delay } from 'rxjs/operators';
import { ENV } from '../../env';

/*
----- TODO backend ------------
1. npm install json-server
2. copy db.json > .
3. json-server --watch db.json
-------------------------------
*/
@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  list(): Observable<User[]> {
    // add delay to test the async pipe
    return this.http.get<User[]>(`${ENV.backendUrl}/users/`).pipe(delay(500));
  }

  get(userId: number): Observable<User> {
    // add delay to test the resolver service
    return this.http.get<User>(`${ENV.backendUrl}/users/${userId}`).pipe(delay(500));
  }

  save(user: User): Observable<User> {
    return this.http.put<User>(`${ENV.backendUrl}/users/${user.id}`, user, {
      headers: { 'Content-Type': 'application/json' }});
  }

  isLoggedIn(): boolean {
    // switch true <> false to test the guard service
    return true;
  }

}
