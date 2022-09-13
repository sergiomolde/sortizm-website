import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValorankService {

  constructor(private http: HttpClient) { }

  getValorankData(formData: any) {
    return this.http.get(`http://www.sortizm-dev.es/valorank${formData.language}${formData.region}${formData.riotname}${formData.riotid}`, );
  }
}
