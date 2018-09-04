import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chart-prestations',
  templateUrl: './chart-prestations.component.html',
  styleUrls: ['./chart-prestations.component.scss']
})
export class ChartPrestationsComponent implements OnInit {

  single$: Observable<{ 'name': string; 'value': number; }[]>;
  constructor( private prestationService: PrestationService) { }

  ngOnInit() {
    this.single$ = this.prestationService.Chart_client_totalHT();

    // console.log(this.single);
  }

}
