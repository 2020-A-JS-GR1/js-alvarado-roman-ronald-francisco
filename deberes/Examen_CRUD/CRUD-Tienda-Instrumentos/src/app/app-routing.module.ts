import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaInstrumentoComponent} from "./rutas/ruta-instrumento/ruta-instrumento.component";
import {RutaListaInstrumentoComponent} from "./rutas/ruta-lista-instrumento/ruta-lista-instrumento.component";
import {RutaCrearInstrumentoComponent} from "./rutas/ruta-crear-instrumento/ruta-crear-instrumento.component";
import {RutaEditarInstrumentoComponent} from "./rutas/ruta-editar-instrumento/ruta-editar-instrumento.component";

const routes: Routes = [
  {
    component: RutaInicioComponent,
    path: 'inicio'
  },
  {
    component: RutaInstrumentoComponent,
    path: 'instrumento',
    children: [
      {
        path: 'lista',
        component: RutaListaInstrumentoComponent
      },
      {
        path: 'crear',
        component: RutaCrearInstrumentoComponent
      },
      {
        path: 'editar/:id',
        component: RutaEditarInstrumentoComponent
      },
      {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
