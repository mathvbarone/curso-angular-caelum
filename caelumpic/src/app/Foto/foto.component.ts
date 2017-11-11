import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'Foto',
    templateUrl: './foto.component.html'
})

export class FotoComponent{
    @Input() url;
    @Input() titulo;
}