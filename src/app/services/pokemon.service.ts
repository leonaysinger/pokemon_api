import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  listPokemons(options): Observable<any> {
    return this.http.get(`${environment.pokemon}`, options);
  }

  listGenerations(options): Observable<any> {
    return this.http.get(`${environment.generations}`, options);
  }

  getGeneration(url, options): Observable<any> {
    return this.http.get(url, options);
  }
}
