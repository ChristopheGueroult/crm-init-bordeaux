import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient
  ) { }

  // https://github.com/angular/angular-cli/wiki/stories-proxy  (config du proxy pour auth localhost:4200 a appeler api sur localhost:3000)
  getClients(): Observable<string[]> {
    if (environment.api_url) {
      return this.http.get<string[]>(`${environment.api_url}/clients`);
    } else {
      return of(['coderbase', 'm2i']);
    }
  }

  addClient(clt: string) {
    if (environment.api_url) {
      return this.http.post<string>(`${environment.api_url}/clients`, {name: clt});
    } else {
      return of('erreur client non ajouté');
    }
  }
}
