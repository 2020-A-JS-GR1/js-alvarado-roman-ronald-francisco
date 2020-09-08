import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CartaPeliculaComponent} from './componentes/carta-pelicula/carta-pelicula.component';
import {HttpClientModule} from '@angular/common/http';
import {UsuarioService} from "./componentes/servicios/http/usuario.service";
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaDetalleUsuarioComponent } from './rutas/ruta-detalle-usuario/ruta-detalle-usuario.component';

@NgModule({
  declarations: [ // Componentes
    AppComponent,
    CartaPeliculaComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaDetalleUsuarioComponent
  ],
  imports: [ // Modulo vamos a usar
    BrowserModule, // -> Importa el NGFOR y el NGIF
    AppRoutingModule,
    HttpClientModule, // -> Importa el HttpClient
  ],
  providers: [ // Servicios
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
