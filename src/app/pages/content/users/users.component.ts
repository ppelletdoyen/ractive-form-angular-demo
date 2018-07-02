import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../core/services/users.service';
import { User } from '../../../shared/model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersObs: Observable<User[]>;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.usersObs = this.userService.list();
  }

}
