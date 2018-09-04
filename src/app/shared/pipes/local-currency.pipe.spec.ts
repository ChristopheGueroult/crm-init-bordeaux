import { LocalCurrencyPipe } from './local-currency.pipe';
import { Inject, LOCALE_ID } from '@angular/core';
import { getLocaleCurrencySymbol, CurrencyPipe } from '@angular/common';
describe('LocalCurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new LocalCurrencyPipe(
      'fr',
      new CurrencyPipe('fr')
    );
    expect(pipe).toBeTruthy();
  });

  // it('should return value in local currency', () => {
  //   const pipe = new LocalCurrencyPipe(
  //     'fr',
  //     new CurrencyPipe('fr')
  //   );
  //   const value = 500;
  //   const local = 'fr';
  //   const cp = new CurrencyPipe('fr');
  //   expect(cp.transform).toEqual(value, getLocaleCurrencySymbol(@Inject(LOCALE_ID));
  // });
});
