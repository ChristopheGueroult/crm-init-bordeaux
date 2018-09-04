import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { ModalService } from '../../../core/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title: string;
  @Input() msg: string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
