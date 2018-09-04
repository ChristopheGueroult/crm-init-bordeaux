import { Component, OnInit } from '@angular/core';
import { Router, Route, Routes } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  // links: any[] = [];
  constructor(private router: Router) { }

  ngOnInit() {


   /*  this.router.config.forEach((route: Route) => {
      if ( route && route.data && route.data.position === 'nav' ) {
        this.links.push(route);
      }
  }); */
  }

}

/* export interface AppRoutes extends Route {
  data?: { name?: string, position?: string};
}
 */
