import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPrestationsComponent } from './containers/main-prestations/main-prestations.component';
import { ChartPrestationsComponent } from './containers/chart-prestations/chart-prestations.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';
import { ResolverPrestationService } from './services/resolver-prestation.service';
import { CanDeactivateGuard } from '../shared/guards/can-deactivate-guard.guard';

const appRoutes: Routes = [

  { path: 'prestations',
  component: MainPrestationsComponent,
  data: { position: 'nav' , name: 'Prestations'},
  children: [
    { path: '', redirectTo: 'chart', pathMatch: 'full'},
    { path: 'edit/:id', component: EditPrestationComponent, resolve: { prestation: ResolverPrestationService},
    canDeactivate: [CanDeactivateGuard]},
    { path: 'add', component: AddPrestationComponent, canDeactivate: [CanDeactivateGuard] },
    { path: 'chart', component: ChartPrestationsComponent}
  ]
},

];
@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports: [ RouterModule]
})
export class PrestationsRoutingModule { }
