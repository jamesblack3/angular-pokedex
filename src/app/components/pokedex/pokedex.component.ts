import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { PokedexService } from '../../services/pokedex.service';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.less']
})
export class PokedexComponent implements OnInit {
  response: any;

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.getAllPokemon();
  }

  getAllPokemon(): void {
    this.pokedexService.getAllPokemon()
    .pipe(map(response => ({
      count: response.count,
      next: response.next,
      previous: response.previous,
      results: response.results
    })))
    .subscribe(response => this.response = response);
  }
}
