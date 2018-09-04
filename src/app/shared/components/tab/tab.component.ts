import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabComponent implements OnInit {
  @Input() headers: string[];
  constructor() { }

  ngOnInit() {
  }

}
