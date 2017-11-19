import { NgModule } from '@angular/core'
import { PainelComponent } from './painel.component'
import { FiltraPorTituloPipe } from './filtraPorTitulo.pipe'

@NgModule({
  declarations: [ PainelComponent, FiltraPorTituloPipe ],
  exports: [ PainelComponent, FiltraPorTituloPipe ]
})
export class PainelModule {}
