import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  faUser = faUser;
  title = 'My crm';
  user: Observable<any>;
  open = true;

  @Output() toggleNav: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.angularFireAuth.authState;
    // this.user = this.angularFireAuth.authState.pipe(
    //   switchMap(user => {
    //     if (user) {
    //       return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
    //     } else {
    //       return of(null);
    //     }
    //   })
  }

  toggle() {
    this.open = !this.open;
  }

  logout() {
    this.angularFireAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

}
