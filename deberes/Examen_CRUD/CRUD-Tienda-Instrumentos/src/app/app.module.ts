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
import {InstrumentoService} from "./servicios/http/instrumento.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {TipoInstrumentoService} from "./servicios/http/tipoInstrumento.service";

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
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    InstrumentoService,
    TipoInstrumentoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
