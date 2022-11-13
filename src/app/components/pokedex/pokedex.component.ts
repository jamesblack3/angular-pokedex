import { Component, OnInit } from '@angular/core';
import { AllPokemonResponse } from '../../interfaces/all-pokemon-response';
import { PokedexService } from '../../services/pokedex.service';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.less']
})
export class PokedexComponent implements OnInit {
  response: AllPokemonResponse | undefined;

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.getAllPokemon();
  }

  getAllPokemon(): void {
    this.pokedexService.getAllPokemon()
    .subscribe(response => this.response = response);
  }
}
