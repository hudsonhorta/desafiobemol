import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getEndereco(zipcode: string): Observable<any> {
    return this.httpClient.get<any>(`https://viacep.com.br/ws/${zipcode}/json/`);
  }

}
