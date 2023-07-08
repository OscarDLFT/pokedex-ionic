import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss'],
})
export class DetailPokemonComponent  implements OnInit {

  public pokemon: any;

  constructor(
    private navParams: NavParams,
  ) { }

  ngOnInit() {
    this.pokemon = this.navParams.data['pokemon'];
    console.log(this.pokemon);
  }

}
