import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FotoModule } from './Foto/foto.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    FotoModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}