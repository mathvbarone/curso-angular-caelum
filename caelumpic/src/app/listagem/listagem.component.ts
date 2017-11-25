import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FotoComponent } from '../Foto/foto.component'
import { FotoService } from '../Foto/foto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

  title: string = 'Caelumpic';
  fotos: FotoComponent[] = []
  servico: FotoService

  constructor(servico: FotoService) {
    this.servico = servico

    servico.pegarTodos()
      .subscribe(dados => {
        this.fotos = dados
      })
  }

}


export default {
  ListagemComponent,
  teste: 11
}
