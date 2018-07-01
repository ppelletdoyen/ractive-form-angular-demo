import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../shared/model/user';
import { Observable } from 'rxjs/Observable';
import { env } from '../../../env';

/*
----- TODO backend ------------
1. npm install json-server
2. copy db.json > .
3. json-server --watch db.json
-------------------------------
*/
@Injectable()
export class UserApiService {

  constructor(private http: HttpClient) { }

  list(): Observable<User[]> {
    return this.http.get<User[]>(`${env.backendUrl}/users/`);
  }

  get(userId: number): Observable<User> {
    return this.http.get<User>(`${env.backendUrl}/users/${userId}`);
  }

  save(user: User): Observable<User> {
    return this.http.put<User>(`${env.backendUrl}/users/${user.id}`, user, {
      headers: { 'Content-Type': 'application/json' }});
  }

}
