import { Component, OnInit, ContentChild, TemplateRef, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.scss']
})
export class UserInterfaceComponent implements OnInit {
  open = true;
  constructor(
  ) { }

  ngOnInit() {

  }

  toggle() {
    this.open = !this.open;
  }
}
