import { Injectable } from '@angular/core';
import { Prestation } from '../../shared/models/prestation.model';
import { Observable, of, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { StatePrestation } from '../../shared/enums/state-prestation.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  // private _collection: Prestation[];
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private _collection: Observable<Prestation[]>;
  constructor(
    private afs: AngularFirestore
  ) {
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection = this.itemsCollection.valueChanges().pipe(
      map((data) => {
        const res: Prestation[] = [];
        data.forEach(elem => {
          // console.log(elem);
          elem = new Prestation(elem);
          res.push(elem);
          // console.log(elem);
        });
        return res;
      })
    );
    // this.collection = [
    //   new Prestation({
    //     id: 'a1',
    //     intitule: 'Dev Angular',
    //     client: 'coderbase',
    //     lieu: 'Paris',
    //     date_debut: '2018-11-20T23:00:00.000Z',
    //     date_fin: '2018-11-21T23:00:00.000Z',
    //     tjm_ht: 500,
    //     nb_jours: 2
    //   }),
    //   new Prestation({
    //     id: 'b1',
    //     intitule: 'Dev Angular',
    //     client: 'm2i',
    //     lieu: 'Paris',
    //     date_debut: '2018-11-20T23:00:00.000Z',
    //     date_fin: '2018-11-21T23:00:00.000Z',
    //     tjm_ht: 500,
    //     nb_jours: 2
    //   }),
    //   new Prestation({
    //     id: 'c1',
    //     intitule: 'Dev Angular',
    //     client: 'edugroupe',
    //     lieu: 'Paris',
    //     date_debut: '2018-11-20T23:00:00.000Z',
    //     date_fin: '2018-11-21T23:00:00.000Z',
    //     tjm_ht: 500,
    //     nb_jours: 2
    //   }),
    // ];
  }

  set collection(col: Observable<Prestation[]>) {
    this._collection = col;
  }

  get collection(): Observable<Prestation[]> {
    return this._collection;
  }

  Chart_client_totalHT(): Observable<any> {
    return this.itemsCollection.valueChanges().pipe(
      map((data) => {
        const res = [];
        data.forEach(elem => {
          elem = new Prestation(elem);
          res.push({name : elem.client, value : elem.totalHT()});
          // console.log(elem);
        });
        // console.log(res);
        return res;
      })
    )
  }

  addPrestation(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
  }

  updatePrestation(item: Prestation, option?: StatePrestation): Promise<any> {
    const presta  = {...item};
    if (option) {
      presta.state = option;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
  }

}
