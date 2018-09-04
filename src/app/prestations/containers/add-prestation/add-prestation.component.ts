import { FormPrestationComponent } from './../../components/form-prestation/form-prestation.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { Router } from '@angular/router';
import { FormCanDeactivate } from '../../../shared/guards/form-candesactivate.class';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent extends FormCanDeactivate implements OnInit, AfterViewInit {
  @ViewChild(FormPrestationComponent) formprestationViewChild: FormPrestationComponent;
  constructor(
    private prestationService: PrestationService,
    private router: Router
  ) {super(); }

  ngOnInit() {}
  ngAfterViewInit() { console.log(this.formprestationViewChild); }

  add(item: Prestation): void {
    this.prestationService.addPrestation(item).then(() => {
      this.router.navigate(['/prestations/chart']);
    });
  }

}
