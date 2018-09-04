import { Component, OnInit, Output, EventEmitter, Input, OnDestroy, HostListener, ViewChild, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { TypePrestation } from '../../../shared/enums/type-prestation.enum';
import { StatePrestation } from '../../../shared/enums/state-prestation.enum';
import { DatesService } from '../../../shared/services/dates.service';
import { Prestation } from '../../../shared/models/prestation.model';
import { ClientService } from '../../services/client.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from '../../../shared/services/modal.service';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent  implements OnInit, OnChanges {
  faPlusCircle = faPlusCircle;
  form: FormGroup;

  types: TypePrestation[] = Object.values(TypePrestation);
  states: StatePrestation[] = Object.values(StatePrestation);
  initPrestation: Prestation = new Prestation();
  // clients$: Observable<string[]>;
  clients$: BehaviorSubject<string[]> = new BehaviorSubject(['']);


  @Output() item: EventEmitter<any> = new EventEmitter();
  @Input() prestation: Prestation;
  @ViewChild('ngForm')
  ngForm: NgForm;

  constructor(
    private fb: FormBuilder,
    private dateService: DatesService,
    private clientService: ClientService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    // this.clients$ = this.clientService.getClients();
    this.clientService.getClients().subscribe((data) => {
      this.clients$.next(data);
    });
  }

  ngOnChanges(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      intitule: this.prestation ? this.prestation.intitule : this.initPrestation.intitule,
      client: this.prestation ? this.prestation.client : this.initPrestation.client,
      lieu: this.prestation ? this.prestation.lieu : this.initPrestation.lieu,
      date_debut: [
        this.prestation ? this.dateService.dateIsoToDapicker(this.prestation.date_debut) : this.dateService.dateOfTheDay(),
        Validators.required
      ],
      date_fin: this.prestation ? this.dateService.dateIsoToDapicker(this.prestation.date_fin) : this.initPrestation.date_fin,
      tjm_ht: this.prestation ? this.prestation.tjm_ht : this.initPrestation.tjm_ht,
      nb_jours: this.prestation ? this.prestation.nb_jours : this.initPrestation.nb_jours,
      type : [this.prestation ? this.prestation.type : this.initPrestation.type , Validators.required],
      state: [this.prestation ? this.prestation.state : this.initPrestation.state, Validators.required],
      taux_tva: this.prestation ? this.prestation.taux_tva : this.initPrestation.taux_tva
    });
  }

  public getItem(item: Prestation) {
    const data = this.form.value;
    if (!this.prestation) {
      return data;
    }
    const id = this.prestation.id;
    return {id, ...data};
  }

  public process(): void {
    const date_debut = this.form.get('date_debut');
    const date_fin = this.form.get('date_fin');
    if (date_debut && date_debut.value ) {
      date_debut.setValue(this.dateService.dateToIso(date_debut.value));
    }
    if (date_fin && date_fin.value) {
      date_fin.setValue(this.dateService.dateToIso(date_fin.value));
    }
    const data = this.getItem(this.form.value);
    this.item.emit(data);
    this.form.reset(this.initPrestation);
    this.form.get('date_debut').setValue(this.dateService.dateOfTheDay());
  }

  public isError(fieldName: string): boolean {
    return this.form.get(fieldName).invalid && this.form.get(fieldName).touched;
  }

  public addClient() {
    this.modalService.createModal({title: 'Confirmation', msg: 'Voulez vous ajouter ce client ?', component: ModalComponent})
    .then((result) => {
      console.log(result); // if click cancel btn
    }, (reason) => {
      console.log(reason);
      // return Confirm Click if click confirm btn, 0 if ESC key and 1 if click outside the modal
      // ngbModal give us two enums bellow for ESC click et outside CLICK
      if (reason !== ModalDismissReasons.ESC && reason !== ModalDismissReasons.BACKDROP_CLICK) {
        // this.addItem(item);
        console.log(reason);
        this.clientService.addClient(reason).subscribe((data) => {
          console.log(data);
        });
      }
    });
  }



}
