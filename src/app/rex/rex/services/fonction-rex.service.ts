import { Injectable } from '@angular/core';

import { Rex } from '../models/rex';
import { HttpService } from '../../../logiciel/logiciel/services/http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environnement.dev';


@Injectable({
  providedIn: 'root'
})
export class FonctionRexService {

  constructor(private httpService : HttpService, private http: HttpClient) { }

  public getAccount(idRex : number, page : number, size : number):Observable<Rex>{
    return this.http.get<Rex>(environment.production+"/v1/rrex"+idRex+"/pageOperations?page="+page+"&size="+size);
  }

  setMat(mat : any) {
    return this.httpService.post({endpoint : 'v1/rex',data : mat});
   }

   updateMateriel(materiel : Rex) {
     return this.httpService.put({endpoint : `v1/rex`,data : materiel});
   }

   getMateriels() {
    return this.httpService.get("v1/rex");
   }

  //  deleteMateriel(idRex : number) {
  //    return this.httpService.delete(`v1/rex/${idRex}`);
  //  }
   deleteMateriel(id : number) {
    return this.httpService.delete(`v1/rex/${id}`);
  }
   getByRexId(idRex: number) {
    return this.httpService.get('v1/rex/' + idRex);
  }
}
