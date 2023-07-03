import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-pokemons',
    pathMatch: 'full'
  },
  {
    path: 'list-pokemons',
    loadChildren: () => import('./pages/list-pokemons/list-pokemons.module').then( m => m.ListPokemonsModule)
  },
  {
    path: 'detail-pokemon',
    loadChildren: () => import('./pages/detail-pokemon/detail-pokemon.module').then( m => m.DetailPokemonModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
