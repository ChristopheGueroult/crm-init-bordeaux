import { Component, OnInit, Input } from '@angular/core';
import { StatePrestation } from '../../../shared/enums/state-prestation.enum';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input() item;
  options = Object.values(StatePrestation);
  constructor(
    private prestationService: PrestationService
  ) {
  }

  ngOnInit() {
  }

  process(item, option) {
    this.prestationService.updatePrestation(item, option).then(() => {
    });
  }

}
