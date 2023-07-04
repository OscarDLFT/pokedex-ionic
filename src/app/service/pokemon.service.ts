import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _nextUrl: string = '';

  constructor() { 
    this.nextUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20';
  }

  public get nextUrl(): string {
    return this._nextUrl;
  }
  public set nextUrl(value: string) {
    this._nextUrl = value;
  }

  getPokemons(){

    const url = this.nextUrl;

    if(url){

      const options = {
        url,
        headers: {},
        params: {}
      }

      return Http.get(options).then( async (response) => {

        let pokemons: any = [];
        console.log(response);
        
        if(response.data){

          const results = response.data.results;
          this._nextUrl = response.data.next;

          for (let index = 0; index < results.length; index++) {
            const pokemon = results[index];
            const urlPokemon = pokemon.url;
            const options = {
              url: urlPokemon,
              headers: {},
              params: {}
            };
            await Http.get(options).then( pok => {
              const pokData = pok.data;
              console.log(pokData);

              const pokObj = new Pokemon();
              pokObj.id = pokData.order;
              pokObj.name = pokData.name;
              pokObj.type1 = pokData.types[0].type.name;
              if(pokData.types[1]){
                pokObj.type2 = pokData.types[1].type.name;
              }
              pokObj.sprite = pokData.sprites.front_default;
              pokObj.weight = pokData.weight;
              pokObj.height = pokData.height;
              pokObj.stats = pokData.stats;
              pokObj.abilities = pokData.abilities;

              pokemons.push(pokObj);

            }).catch(error => console.error(error));
          }
          return pokemons;
        }
      }).catch(error => console.error(error))
    }
    return null;
  }
}
