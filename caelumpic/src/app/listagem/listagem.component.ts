import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FotoComponent } from '../Foto/foto.component'

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

  title: string = 'Caelumpic';
  fotos: FotoComponent[] = []
  //fotos: Object[] = []

  constructor(http: Http) {
    // Exercicio 3.9
    const stream = http.get('http://localhost:3000/v1/fotos')

    stream
    .map((dados) => dados.json())
    .subscribe((dados) => {
      // this: Contexto Léxico(Leitura)
      this.fotos = dados
      //console.log(this)
    })
  }

}


export default {
  ListagemComponent,
  teste: 11
}
