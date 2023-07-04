import { Pokemon } from './../../models/pokemon';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
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
    private pokemonService: PokemonService,
    private loadingCtrl: LoadingController,
  ) {
    this._unsubs = new Subject();
   }

  ngOnInit() {
    this.morePokemon();
  }

  async morePokemon(event: any = null): Promise<void> {
    const promise = this.pokemonService.getPokemons();
      if(promise){
        let loading: any = null;
        if(!event){
          loading = await this.loadingCtrl.create({
            message: 'Cargando...'
          });
          await loading.present();
        }

        promise.then((res: Pokemon[]) => {
          this.pokemons =  this.pokemons.concat(res);
          this.pokemons = this.pokemons.sort((a, b) => a?.id - b?.id);
          console.log(this.pokemons);

          if(event){
            event.target.complete();
          }

          if(loading){loading.dismiss();} 
      }).catch((error: any) => {
        console.error(error); 
        if(event){event.target.complete()};
        if(loading){loading.dismiss();}});
    }
  }
}
