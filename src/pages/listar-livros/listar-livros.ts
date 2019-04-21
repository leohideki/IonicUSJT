import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LivroProvider } from '../../providers/livro'

/**
 * Generated class for the ListarLivrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar-livros',
  templateUrl: 'listar-livros.html',
  providers:[
    LivroProvider,
  ]
})
export class ListarLivrosPage {

  public lista_livros = new Array<any>();
  public aux = new Array<any>();
  constructor(public navCtrl: NavController,
    private livroProvider: LivroProvider) {

  }
  ionViewDidLoad() {
    this.livroProvider.getLivros().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body); 
        this.aux = objeto_retorno.results;
        for(var i = 0; i < this.aux.length; i++){
          this.lista_livros.push(this.aux[i]);
        }
        
        console.log(this.lista_livros.concat); 
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }
  

}
