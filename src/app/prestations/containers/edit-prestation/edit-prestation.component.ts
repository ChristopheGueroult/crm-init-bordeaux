import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from '../../../shared/models/prestation.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FormCanDeactivate } from '../../../shared/guards/form-candesactivate.class';
import { FormPrestationComponent } from '../../components/form-prestation/form-prestation.component';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent extends FormCanDeactivate implements OnInit, OnDestroy {
  public prestation: Prestation;
  @ViewChild(FormPrestationComponent) formprestationViewChild: FormPrestationComponent;

  constructor(
    private prestationService: PrestationService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { super(); }

  ngOnInit() {
    // console.log(this.activatedRoute);
    // console.log(this.router);
    this.activatedRoute.data.subscribe((data) => {
      this.prestation = data['prestation'];
      // console.log(this.prestation);
    });
  }

  ngOnDestroy() {

  }

  public update(item: Prestation): void {
    this.prestationService.updatePrestation(item).then((data) => {
      this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
    });
  }

}
