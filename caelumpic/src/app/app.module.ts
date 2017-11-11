import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotoModule } from './Foto/foto.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    FotoModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
