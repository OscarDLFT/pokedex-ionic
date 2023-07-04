import { Pokemon } from './../../models/pokemon';
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss'],
})
export class ListPokemonsComponent implements OnInit {
  public _unsubs: Subject<any>;

  pokemons: any[] = [];

  constructor(
    private pokemonService: PokemonService
  ) {
    this._unsubs = new Subject();
   }

  ngOnInit() {
    this.morePokemon();
  }

  morePokemon(): void {
    const promise = this.pokemonService.getPokemons();
      if(promise){
        promise.then((res: Pokemon[]) => {
          this.pokemons =  this.pokemons.concat(res);
          this.pokemons = this.pokemons.sort((a, b) => a?.id - b?.id);
          console.log(res);
        });
      }
  }
}
