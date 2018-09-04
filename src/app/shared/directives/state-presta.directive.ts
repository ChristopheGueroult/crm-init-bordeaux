import { Directive, HostBinding, OnChanges, Input } from '@angular/core';
import { StatePrestation } from '../enums/state-prestation.enum';

@Directive({
  selector: '[appStatePresta]'
})
export class StatePrestaDirective implements OnChanges {
  @Input() appStatePresta: StatePrestation;
  @HostBinding('class') nomClass: string;
  constructor() {
  }

  ngOnChanges() {
    // console.log(this.appStatePresta);
    this.nomClass = this.formatClass(this.appStatePresta);
  }

  private formatClass(state: StatePrestation): string {
    return `state-${state.normalize('NFD')
    .replace(/[\u0300-\u036f\s]/g, '')
    .toLowerCase()
    }`;
  }

}
