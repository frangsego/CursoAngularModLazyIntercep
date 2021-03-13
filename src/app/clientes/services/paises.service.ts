import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }

  getPaises() {
    
    const url = 'https://restcountries.eu/rest/v2/all';
    return this.http.get( url );
    
  }
}