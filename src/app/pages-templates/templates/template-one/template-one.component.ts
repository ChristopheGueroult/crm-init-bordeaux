import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-one',
  templateUrl: './template-one.component.html',
  styleUrls: ['./template-one.component.scss']
})
export class TemplateOneComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
