import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/containers/login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ]
})
export class AppRoutingModule { }
