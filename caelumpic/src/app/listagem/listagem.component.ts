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
  
  remover(foto: FotoComponent){
    this.servico.apagar(foto)
                .subscribe(
                  () => {
                    console.log("Ta apagando?")

                    const novaListaDeFotos = this.fotos.filter(e => {
                      return e._id != foto._id
                    })

                    this.fotos = novaListaDeFotos
                  }
                )
  }
}





export default {
  ListagemComponent,
  teste: 11
}
