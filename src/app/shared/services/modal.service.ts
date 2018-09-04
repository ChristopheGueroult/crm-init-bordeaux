import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor (private ngbModalService: NgbModal) {
  }

  createModal(fields: {title: string, msg: string, component: any}) {
    const modalRef = this.ngbModalService.open(fields.component);
    modalRef.componentInstance.title = fields.title;
    modalRef.componentInstance.msg = fields.msg;
    return modalRef.result;
  }
}
