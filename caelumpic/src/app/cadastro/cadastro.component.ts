import { Component } from '@angular/core';
import { FotoComponent } from '../Foto/foto.component';
import { Http, Headers } from '@angular/http'
import { FotoService } from '../Foto/foto.service';
//import { Headers } from '@angular/http/src/headers';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  foto: FotoComponent
  servico: FotoService

  constructor(servico: FotoService) {
    this.foto = new FotoComponent()
    this.servico = servico
  }

  salvar(event) {

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
