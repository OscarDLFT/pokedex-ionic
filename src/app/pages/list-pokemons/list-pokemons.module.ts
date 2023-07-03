import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListPokemonsComponent } from './list-pokemons.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

const rutas: Routes = [
  {
    path: '',
    component: ListPokemonsComponent
  }
]

@NgModule({
  declarations: [ListPokemonsComponent],
  exports: [ListPokemonsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas), 
    FormsModule,
    IonicModule
  ]
})
export class ListPokemonsModule { }
