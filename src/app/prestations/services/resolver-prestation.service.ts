import { Injectable } from '@angular/core';
import { PrestationService } from './prestation.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Prestation } from '../../shared/models/prestation.model';

@Injectable({
  providedIn: 'root'
})
export class ResolverPrestationService {

  constructor(
    private prestationService: PrestationService,
    private router: Router
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Prestation> {
    const id = route.paramMap.get('id');
    return this.prestationService.getPrestation(id).pipe(
      take(1),
      tap((data) => {
        if (data) {
          return data;
        } else {
          this.router.navigate(['prestations/chart']);
          return null;
        }
      })
    );
  }
}
