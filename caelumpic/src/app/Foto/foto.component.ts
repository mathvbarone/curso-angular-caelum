import { Component, Input } from '@angular/core'

@Component({
  selector: 'Foto',
  templateUrl: './foto.component.html'
})
export class FotoComponent {
  @Input() url: string = '';
  @Input() titulo: string = '';
  @Input() descricao: string = '';
  _id: string = ''
}
