import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroLivroPage } from './cadastro-livro';

@NgModule({
  declarations: [
    CadastroLivroPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroLivroPage),
  ],
})
export class CadastroLivroPageModule {}
