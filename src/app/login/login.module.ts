import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { PagesTemplatesModule } from '../pages-templates/pages-templates.module';


@NgModule({
  imports: [
    CommonModule,
    PagesTemplatesModule,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
