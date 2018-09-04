import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesTemplatesModule } from '../pages-templates/pages-templates.module';
import { SharedModule } from '../shared/shared.module';

import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PrestationComponent } from './components/prestation/prestation.component';
import { MainPrestationsComponent } from './containers/main-prestations/main-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { ChartPrestationsComponent } from './containers/chart-prestations/chart-prestations.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';
import { ModalComponent } from '../shared/components/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    PagesTemplatesModule,
    NgbModule,
    PrestationsRoutingModule,
    SharedModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
],
  declarations: [
    ListPrestationsComponent,
    PrestationComponent,
    MainPrestationsComponent,
    ChartPrestationsComponent,
    AddPrestationComponent,
    FormPrestationComponent,
    EditPrestationComponent
  ],
  exports: [MainPrestationsComponent],
})
export class PrestationsModule { }
