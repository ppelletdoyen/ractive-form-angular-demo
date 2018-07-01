import { User } from './../../../shared/model/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../../../core/services/api/user-api.service';
import { switchMap, map } from 'rxjs/operators';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userDetail: User;
  userForm: FormGroup;
  saveEvents: Subscription;

  constructor(private route: ActivatedRoute, private userService: UserApiService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.userDetail = this.route.snapshot.data['userDetail'];
    this.buildUserForm();
  }

  onDestroy() {
    if (this.saveEvents) {
      this.saveEvents.unsubscribe();
    }
  }

  save() {
    const saveUser: User = this.prepareSaveUser();
    this.saveEvents = this.userService.save(saveUser).subscribe(res => {
      this.router.navigate(['users']);
    }, (err) => {
      console.error(err);
    });
  }

  cancel() {
    this.userForm.reset();
    this.router.navigate(['users']);
  }

  private buildUserForm() {
    this.userForm.reset({
      name: this.userDetail.name
    });
  }

  private prepareSaveUser(): User {
    const formModel = this.userForm.value;
    const saveUser: User = {
      id: this.userDetail.id,
      name: formModel.name
    };
    return saveUser;
  }

}
