import { PrestationI } from '../interfaces/prestation.interface';
import { TypePrestation } from '../enums/type-prestation.enum';
import { StatePrestation } from '../enums/state-prestation.enum';

export class Prestation implements PrestationI {
  public id: string;
  public intitule: string;
  public client: string;
  public lieu: string;
  public date_debut: string = new Date().toISOString();
  public date_fin: string;
  public tjm_ht = 0;
  public nb_jours = 0;
  public type: TypePrestation = TypePrestation.PRESTATION;
  public state: StatePrestation = StatePrestation.OPTION;
  public taux_tva = 20;
  constructor(
    fields?: Partial<Prestation>
  ) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
  totalHT(): number {
    return this.tjm_ht * this.nb_jours;
  }
  totalTTC(tva?: number): number | string {
    if (tva <= 0) {
      return this.totalHT();
    } else if (tva) {
      return this.totalHT() + (tva * this.totalHT() / 100);
    } else {
      return this.totalHT() + (this.taux_tva * this.totalHT() / 100);
    }
  }
}
