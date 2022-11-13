import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { POKEMON_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) { }

  public getAllPokemon(): Observable<any> {
    return this.http.get(POKEMON_URL);
  }
}
