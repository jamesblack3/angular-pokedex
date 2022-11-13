import { Component, Input, OnInit } from '@angular/core';
import { PokemonResponse } from '../../interfaces/pokemon-response';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.less']
})
export class PokemonComponent implements OnInit {
  response: PokemonResponse | undefined;
  @Input()
  name: string = "";
  
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon(this.name)
    .pipe()
    .subscribe(response => this.response = response);
  }

}
