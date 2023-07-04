import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _nextUrl: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20';

  constructor() { }

  public get nextUrl(): string {
    return this._nextUrl;
  }

  public set nextUrl(value: string) {
    this._nextUrl = value;
  }


  getPokemons(): any {
    const url = this.nextUrl;
    
    if(url){
      const options = {
        url,
        headers: {},
        params: {},
      };

      return Http.get(options).then(async (response) => {
        let pokemons: any = [];
        if(response.data){
          const results = response.data.results;
          const _nextUrl = response.data.next;

          for (let index = 0; index < results.length; index++) {
            const pokemon = results[index];
            const urlPokemon = pokemon.url;
            const options = {
              url: urlPokemon,
              headers: {},
              params: {},
            };
           await Http.get(options).then(pok => {
              const pokeData = pok.data;
              const pokObj = new Pokemon();
              pokObj.id = pokeData.order;
              pokObj.name = pokeData.name;
              pokObj.type1 = pokeData.types[0].type.name;
              if(pokeData.types[1]){
                pokObj.type2 = pokeData.types[1].type.name
              }
              pokObj.sprite = pokeData.sprite?.front_default;
              pokObj.weight = pokeData.weight;
              pokObj.height = pokeData.height;
              pokObj.stats = pokeData.stats;
              pokObj.abilities = pokeData.abilities;

              pokemons.push(pokObj);

            });
          }
          return pokemons;
        }
      }).catch(error => console.error(error));
    }
    return null;
  }
}
