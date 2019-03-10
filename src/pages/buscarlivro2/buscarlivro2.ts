import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Buscarlivro2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscarlivro2',
  templateUrl: 'buscarlivro2.html',
})
export class Buscarlivro2Page {

  searchQuery: string = '';
  items: string[];

  constructor() {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'A Guerra dos Tronos, George R. R. Martins',
      'Dom Casmurro, Machado de Assis',
      'Dom Quixote, Miguel de Cervantes',
      'Em busca do tempo perdido, Marcel Proust',
      'Fahrenheit 451, Ray Bradbury',
      'Guerra e paz, Liev Tolstói',
      'Lolita, Vladimir Nabokov',
      'Moby Dick, Herman Melville',
      'Nineteen Eighty-Four, George Orwell',
      'O Senhor dos Anéis, J. R. R. Tolkien',
      'O mistério do Coelho Pensante, Clarice Lispector',
      'The Inferno of Dante, Dante Alighieri',
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
