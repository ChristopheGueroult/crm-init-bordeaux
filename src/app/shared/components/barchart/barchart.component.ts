import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent  {
  @Input() data: any[];
  @Input()  xAxisLabel: string;
  @Input()  yAxisLabel: string;
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;

  showYAxisLabel = true;

  colorScheme = {
    name: 'fire',
    selectable: true,
    group: 'Ordinal',
    domain: [
      '#ff3d00', '#bf360c', '#ff8f00', '#ff6f00', '#ff5722', '#e65100', '#ffca28', '#ffab00'
    ]
  };

  constructor() {

  }

  onSelect(event) {
    console.log(event);
  }

}
