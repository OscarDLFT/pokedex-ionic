import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

const rutas: Routes = [
  {
    path: '',
    component: DetailPokemonComponent
  }
]

@NgModule({
  declarations: [DetailPokemonComponent],
  exports: [DetailPokemonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas), 
    FormsModule,
    IonicModule
  ],
})
export class DetailPokemonModule { }
