import { Pipe, PipeTransform } from '@angular/core';
import { Prestation } from '../models/prestation.model';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: Prestation, args?: number): number | string {
    if (!value) {
      return '';
    }
    if (args > -1) {
      return value.totalTTC(args);
    } else {
      return value.totalHT();
    }
  }

}
