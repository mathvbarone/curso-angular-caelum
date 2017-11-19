import { Component, Input, OnInit } from '@angular/core'
import { constructDependencies } from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'Painel',
  templateUrl: './painel.component.html'
})
export class PainelComponent implements OnInit {
  @Input() titulo: string

  constructor() {
    console.log(this.titulo)
  }
  // 5.13
  ngOnInit() {
    if(this.titulo.length > 7) {
      this.titulo = `${this.titulo.substring(0, 7)}...`
    }
  }
}
