import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Caelumpic';

  constructor(http: Http) {
    const stream = http.get('http://localhost:3000/v1/fotos');

    stream.subscribe(dados =>{
      console.log(dados.json());
    });
    
  }

}
