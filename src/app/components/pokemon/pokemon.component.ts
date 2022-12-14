import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { TYPE_COLORS } from 'src/app/constants';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.less']
})
export class PokemonComponent implements OnInit {
  response: any;
  public typeColors: string[] = [];

  @Input()
  url: string = '';

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon(this.url)
    .pipe(map(response => ({
      name: response.name as string,
      id: response.id as number,
      sprite: response.sprites.other['official-artwork'].front_default as string,
      types: response.types as any[],
      icon: response.sprites.versions['generation-viii'].icons.front_default as string
    })))
    .subscribe(response => {
      this.response = response;
      for (let i = 0; i < response.types.length; i++) {
        this.typeColors[i] = TYPE_COLORS[response.types[i].type.name as keyof typeof TYPE_COLORS];
      }
    });
  }
}
