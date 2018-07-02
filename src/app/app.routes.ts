import { DetailResolveService } from './core/services/detail-resolve.service';
import { Routes } from '@angular/router';
import { UsersComponent } from './pages/content/users/users.component';
import { DetailComponent } from './pages/content/detail/detail.component';
import { LoggedInGuardService } from './core/services/logged-in-guard.service';

export const ROUTES: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'detail/:id', component: DetailComponent, resolve: {
      detail: DetailResolveService }, canActivate: [LoggedInGuardService]
    }
];
