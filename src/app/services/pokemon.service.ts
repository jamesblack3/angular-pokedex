import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { POKEMON_URL } from '../constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) { }

  public getPokemon(url: string): Observable<any> {
    return this.http.get(url);
  }
}
