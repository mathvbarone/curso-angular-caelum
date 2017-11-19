import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { FotoModule } from './Foto/foto.module'
import { PainelModule } from './Painel/painel.module'

import 'rxjs/add/operator/map';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component'
import { roteamento } from './roteamento';
import { Page404Component } from './page404/page404.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    FotoModule,
    HttpModule,
    PainelModule,
    roteamento,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
