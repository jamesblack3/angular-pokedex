import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { POKEMON_URL } from '../constants';
import { Observable } from 'rxjs';
import { PokemonResponse } from '../interfaces/pokemon-response';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) { }

  public getPokemon(name: string): Observable<any> {
    return this.http.get(POKEMON_URL + name);
  }
}
