import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Livro } from '../../model/livro';
import { DestinoPage } from '../destino/destino';

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

  //searchQuery: string = '';
  public items: Livro[];

  constructor(public navCtrl: NavController) {
    var l1 = {nome:'A Guerra dos Tronos', autor:'George R. R. Martins',editora: 'Bantam Spectra'};
    var l2 = {nome:'Dom Casmurro', autor:'Machado de Assis',editora:''};
    var l3 = {nome:'Dom Quixote', autor:'Miguel de Cervantes', editora:''};
    var l4 = {nome:'Em busca do tempo perdido', autor:'Marcel Proust', editora:''};
    var l5 = {nome:'Fahrenheit 451', autor:'Ray Bradbury', editora:''};
    var l6 = {nome:'Guerra e paz', autor:'Liev Tolstói', editora:''};
    var l7 = {nome:'Lolita', autor:'Vladimir Nabokov', editora:''};
    var l8 = {nome:'Moby Dick', autor:'Herman Melville', editora:''}
    var l9 = {nome:'Nineteen Eighty-Four', autor:'George Orwell', editora:''};
    var l10 = {nome:'O Senhor dos Anéis', autor:'J. R. R. Tolkien', editora:''};
    var l11 = {nome:'O mistério do Coelho Pensante', autor:'Clarice Lispector', editora:''};
    var l12 = {nome:'The Inferno of Dante', autor:'Dante Alighieri', editora:''};
    this.items = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11,l12];
    //this.initializeItems();
  }

 /* initializeItems() {
      var l1 = {nome:'A Guerra dos Tronos', autor:'George R. R. Martins',editora: 'Bantam Spectra'};
      var l2 = {nome:'Dom Casmurro', autor:'Machado de Assis',editora:''};
      var l3 = {nome:'Dom Quixote', autor:'Miguel de Cervantes', editora:''};
      var l4 = {nome:'Em busca do tempo perdido', autor:'Marcel Proust', editora:''};
      var l5 = {nome:'Fahrenheit 451', autor:'Ray Bradbury', editora:''};
      var l6 = {nome:'Guerra e paz', autor:'Liev Tolstói', editora:''};
      var l7 = {nome:'Lolita', autor:'Vladimir Nabokov', editora:''};
      var l8 = {nome:'Moby Dick', autor:'Herman Melville', editora:''}
      var l9 = {nome:'Nineteen Eighty-Four', autor:'George Orwell', editora:''};
      var l10 = {nome:'O Senhor dos Anéis', autor:'J. R. R. Tolkien', editora:''};
      var l11 = {nome:'O mistério do Coelho Pensante', autor:'Clarice Lispector', editora:''};
      var l12 = {nome:'The Inferno of Dante', autor:'Dante Alighieri', editora:''};
      this.items = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11,l12];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item);
      })
    }
  }*/
  irParaDestino(item:Livro):void{
    this.navCtrl.push(DestinoPage, {livroSelecionado: item});
  }

}
