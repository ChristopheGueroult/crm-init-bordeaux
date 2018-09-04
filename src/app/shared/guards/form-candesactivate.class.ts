import { FormPrestationComponent } from './../../prestations/components/form-prestation/form-prestation.component';
import {ComponentCanDeactivate} from './can-desactivate.class';

export abstract class FormCanDeactivate extends ComponentCanDeactivate {

 abstract get formprestationViewChild(): FormPrestationComponent;

 canDeactivate(): boolean {
      return this.formprestationViewChild.ngForm.submitted ||
       !this.formprestationViewChild.ngForm.dirty;
  }
}
