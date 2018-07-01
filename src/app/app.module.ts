import { UserDetailResolveService } from './core/services/api/user-detail-resolve.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserDetailComponent } from './pages/content/user-detail/user-detail.component';
import { UsersComponent } from './pages/content/users/users.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { UserApiService } from './core/services/api/user-api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    UserApiService,
    HttpClient,
    UserDetailResolveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
