import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UserInterfaceComponent } from './containers/user-interface/user-interface.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  declarations: [UserInterfaceComponent, HeaderComponent, NavComponent, FooterComponent],
  exports: [UserInterfaceComponent, HeaderComponent, NavComponent, FooterComponent]
})
export class UserInterfaceModule { }
