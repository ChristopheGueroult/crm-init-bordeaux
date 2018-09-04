import { Component, OnInit } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation.model';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  collection$: Observable<Prestation[]>;
  headers: string[];
  faPlusCircle = faPlusCircle;

  constructor(
    private prestationService: PrestationService
  ) {
  }

  ngOnInit() {
    this.collection$ = this.prestationService.collection;
    this.headers = [
      'Type',
      'Intitulé',
      'Client',
      'Date début',
      'Date fin',
      'Tjm',
      'Nb. jours',
      'Total HT',
      'Total TTC',
      'Etat',
    ];
  }

}
