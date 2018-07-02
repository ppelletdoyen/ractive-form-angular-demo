import { DetailResolveService } from './core/services/detail-resolve.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailComponent } from './pages/content/detail/detail.component';
import { UsersComponent } from './pages/content/users/users.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { UsersService } from './core/services/users.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    UsersService,
    HttpClient,
    DetailResolveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
