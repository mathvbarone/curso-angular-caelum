import { Component } from '@angular/core';
import { FotoComponent } from '../Foto/foto.component';
import { Http, Headers } from '@angular/http'
import { FotoService } from '../Foto/foto.service';
import { ActivatedRoute } from '@angular/router';
//import { Headers } from '@angular/http/src/headers';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  foto: FotoComponent
  servico: FotoService

  constructor(servico: FotoService, rota: ActivatedRoute) {
    this.foto = new FotoComponent()
    this.servico = servico

    rota.params.subscribe(
      (parametros) => {
        const id = parametros.id

        servico.pegaUm(id)
          .subscribe(
          (foto) => {

            if (foto) {
              this.foto = foto
            }
          }
          )
      }
    )
  }

  salvar(event) {

    if (this.foto._id) {
      this.servico.atualiza(this.foto)
        .subscribe(
        () => {
          console.log("Atualizou ai?")
        }
        )
    } else {
      event.preventDefault()
      console.log('Foto', this.foto)


      this.servico.cadastrar(this.foto)
        .subscribe(
        (dados) => {
          console.log('Deu certo?', dados)
          this.foto = new FotoComponent()
        },
        (erro) => {
          console.log('Deu errado?', erro)
        },
      )
      //console.log(JSON.stringify(this.foto))
    }

  }

}
