import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../../../shared/model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../../../core/services/api/user-api.service';
import { switchMap, map } from 'rxjs/operators';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  paramsEvents: Subscription;
  userEvents: Subscription;
  userDetail: User;
  userForm: FormGroup;
  nameCtrl: FormControl;

  constructor(private activeRoute: ActivatedRoute, private userService: UserApiService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.nameCtrl = this.fb.control('', [Validators.required]);
    this.userForm = this.fb.group({
      name: this.nameCtrl
    });
    this.paramsEvents = this.activeRoute.params.pipe(
      switchMap(param => this.userService.get(param.id)),
      map(res => this.userDetail = res)
    )
    .subscribe(res => this.nameCtrl.setValue(res.name));
  }

  onDestroy() {
    if (this.paramsEvents) {
      this.paramsEvents.unsubscribe();
    }
    if (this.userEvents) {
      this.userEvents.unsubscribe();
    }
  }

  save() {
    this.userEvents = this.userService.save(new User(this.userDetail.id, this.nameCtrl.value)).subscribe(res => {
      this.router.navigate(['/users']);
    }, (err) => {
      console.error(err);
    });
  }

  cancel() {
    this.router.navigate(['/users']);
  }

}
