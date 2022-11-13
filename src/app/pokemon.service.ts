import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { POKEMON_URL } from './constants';
import { Observable } from 'rxjs';
import { IPokemon } from './ipokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) { }

  public getPokemon(id: number): Observable<IPokemon> {
    return this.http.get<IPokemon>(POKEMON_URL + id);
  }
}
