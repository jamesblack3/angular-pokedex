import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { POKEMON_URL } from '../constants';
import { AllPokemonResponse } from '../interfaces/all-pokemon-response';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) { }

  public getAllPokemon(): Observable<AllPokemonResponse> {
    return this.http.get<AllPokemonResponse>(POKEMON_URL);
  }
}
