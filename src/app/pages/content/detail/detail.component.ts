import { User } from './../../../shared/model/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../core/services/users.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  detail: User;
  detailForm: FormGroup;
  saveEvents: Subscription;

  constructor(private route: ActivatedRoute, private service: UsersService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.detailForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    });
    this.detail = this.route.snapshot.data['detail'];
    this.buildDetailForm();
  }

  onDestroy() {
    if (this.saveEvents) {
      this.saveEvents.unsubscribe();
    }
  }

  save() {
    const saveUser: User = this.prepareSaveUser();
    this.saveEvents = this.service.save(saveUser).subscribe(res => {
      this.router.navigate(['users']);
    }, (err) => {
      console.error(err);
    });
  }

  cancel() {
    this.detailForm.reset();
    this.router.navigate(['users']);
  }

  private buildDetailForm() {
    this.detailForm.reset({
      name: this.detail.name
    });
  }

  private prepareSaveUser(): User {
    const formModel = this.detailForm.value;
    const saveUser: User = {
      id: this.detail.id,
      name: formModel.name
    };
    return saveUser;
  }

}
