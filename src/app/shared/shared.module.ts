import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './components/tab/tab.component';
import { TotalPipe } from './pipes/total.pipe';
import { LocalCurrencyPipe } from './pipes/local-currency.pipe';

import { BarchartComponent } from './components/barchart/barchart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatePrestaDirective } from './directives/state-presta.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { ModalComponent } from './components/modal/modal.component';
@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  declarations: [TabComponent, TotalPipe, LocalCurrencyPipe, BarchartComponent, StatePrestaDirective, FilterPipe, ModalComponent],
  exports: [TabComponent, TotalPipe, LocalCurrencyPipe, BarchartComponent, StatePrestaDirective, FilterPipe],
  entryComponents: [
    ModalComponent
  ]
})
export class SharedModule { }
