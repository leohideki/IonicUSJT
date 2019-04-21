import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroLivroPage } from '../pages/cadastro-livro/cadastro-livro';
import { Buscarlivro2Page } from '../pages/buscarlivro2/buscarlivro2';
import { DestinoPageModule } from '../pages/destino/destino.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListarLivrosPage } from '../pages/listar-livros/listar-livros';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroLivroPage,
    Buscarlivro2Page,
    ListarLivrosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DestinoPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroLivroPage,
    Buscarlivro2Page,
    ListarLivrosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
