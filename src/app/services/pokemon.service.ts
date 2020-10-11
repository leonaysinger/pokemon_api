import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  listPokemons(h): Observable<any> {
    const ht = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(`${environment.pokemon}`,
     { headers: ht, params: h});
  }

  listGenerations(options): Observable<any> {
    return this.http.get(`${environment.generations}`, options);
  }

  getGenericUrl(url): Observable<any> {
    return this.http.get(url);
  }
}
