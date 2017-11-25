// Exercicio 4.6 da apostila
import Arquivo, { ListagemComponent } from './listagem/listagem.component'
import { CadastroComponent } from './cadastro/cadastro.component'
import { Page404Component } from './page404/page404.component'
import { RouterModule, Routes } from '@angular/router'

const rotasDaApp: Routes = [
  {path: '', component: ListagemComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'cadastro/:id', component: CadastroComponent},
  {path: '**', component: Page404Component }
]


export const roteamento = RouterModule.forRoot(rotasDaApp)
