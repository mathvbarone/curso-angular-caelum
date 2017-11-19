import { Component } from '@angular/core';
import { FotoComponent } from '../Foto/foto.component';
import { Http, Headers } from '@angular/http'
//import { Headers } from '@angular/http/src/headers';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  foto: FotoComponent
  http: Http
  constructor(http: Http) {
    this.foto = new FotoComponent()
    this.http = http
  }

  salvar(event) {
    // --=-= FormFiller
    event.preventDefault()
    console.log('Foto', this.foto)
    // Que diabos ?
      // this.foto
    // Enviar pro server
    const cabecalho = new Headers()
    cabecalho.append('Content-type', 'application/json')

    const stream = this.http.post(
        'http://localhost:3000/v1/fotos',
        JSON.stringify(this.foto),
        { headers: cabecalho }
      )

      stream.subscribe(
        (dados) => {
          console.log('Deu certo?', dados)
        },
        (erro) => {
          console.log('Deu errado?', erro)
        },
      )
    //console.log(JSON.stringify(this.foto))


  }

}
