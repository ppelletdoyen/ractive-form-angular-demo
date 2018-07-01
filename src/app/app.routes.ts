import { UserDetailResolveService } from './core/services/api/user-detail-resolve.service';
import { Routes } from '@angular/router';
import { UsersComponent } from './pages/content/users/users.component';
import { UserDetailComponent } from './pages/content/user-detail/user-detail.component';

export const ROUTES: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'detail/:id', component: UserDetailComponent, resolve: {
      userDetail: UserDetailResolveService
    } }
  ];
