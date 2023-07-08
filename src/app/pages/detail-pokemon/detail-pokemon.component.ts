import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss'],
})
export class DetailPokemonComponent  implements OnInit {

  public pokemon: any;

  constructor(
    private navParams: NavParams, //cogemos los datos desde otro componente
    private navController: NavController, //controlamos la navegación tanto para ir a alguna ruta como volver
  ) { }

  ngOnInit() {
    this.pokemon = this.navParams.data['pokemon'];
  }

  goBack(): void {
    this.navController.pop();
  }

}
