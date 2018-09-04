import { TypePrestation } from '../enums/type-prestation.enum';
import { StatePrestation } from '../enums/state-prestation.enum';

export interface PrestationI {
  id: string;
  type: TypePrestation;
  intitule: string;
  client: string;
  lieu: string;
  date_debut: string;
  date_fin: string;
  tjm_ht: number;
  nb_jours: number;
  taux_tva: number;
  state: StatePrestation;
  totalHT(): number;
  totalTTC(tva?: number): number | string;
}
