import { Pipe, PipeTransform, Inject, LOCALE_ID } from '@angular/core';
import { getLocaleCurrencySymbol, CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'localCurrency'
})
export class LocalCurrencyPipe implements PipeTransform {
  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private cp: CurrencyPipe
  ) {
  }

  transform(value: any, args?: any): any {
    // console.log(value);
    return this.cp.transform(value, getLocaleCurrencySymbol(this.locale));
  }

}
