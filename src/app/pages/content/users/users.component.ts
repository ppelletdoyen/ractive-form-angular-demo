import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../../../core/services/api/user-api.service';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../../../shared/model/user';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  usersEvents: Subscription;

  constructor(private userService: UserApiService) { }

  ngOnInit() {
    this.usersEvents = this.userService.list().pipe()
    .subscribe(users => this.users = users);
  }

  onDestroy() {
    if (this.usersEvents) {
      this.usersEvents.unsubscribe();
    }
  }

}
