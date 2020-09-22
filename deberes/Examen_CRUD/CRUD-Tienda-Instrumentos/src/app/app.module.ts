import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioInstrumentoComponent } from './componentes/formularios/formulario-instrumento/formulario-instrumento.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaInstrumentoComponent } from './rutas/ruta-instrumento/ruta-instrumento.component';
import { RutaListaInstrumentoComponent } from './rutas/ruta-lista-instrumento/ruta-lista-instrumento.component';
import { RutaCrearInstrumentoComponent } from './rutas/ruta-crear-instrumento/ruta-crear-instrumento.component';
import { RutaEditarInstrumentoComponent } from './rutas/ruta-editar-instrumento/ruta-editar-instrumento.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioInstrumentoComponent,
    RutaInicioComponent,
    RutaInstrumentoComponent,
    RutaListaInstrumentoComponent,
    RutaCrearInstrumentoComponent,
    RutaEditarInstrumentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
