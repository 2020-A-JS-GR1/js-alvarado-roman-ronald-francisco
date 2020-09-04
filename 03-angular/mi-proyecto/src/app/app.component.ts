import { Component } from '@angular/core';
import {UsuarioService} from "./componentes/servicios/http/usuario.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto';

  arregloPeliculas = [
    {
      id:1,
      url:'',
      descripcion: 'Mas barato por docena',
      nombrePelicula: 'Huy se frejo'
    },
    {
      id:2,
      url:'',
      descripcion: 'Menos barato por docena',
      nombrePelicula: 'Yala'
    },
    {
      id:3,
      url:'',
      descripcion: 'Lo mismo pero mas barato',
      nombrePelicula: 'Ni idea'
    }
  ]

  arregloNumeros = [1,2,3]

  // Inyectar Dependencias
  constructor(
    private readonly _usuarioService: UsuarioService
  ) {
  }
  mensajeConsola(objeto: boolean) {
    console.log('Llego el evento', objeto);
    const observableTraerTodos = this._usuarioService.traerTodos();
    observableTraerTodos
      .subscribe(
        (data)=>{ // THEN TRY
          console.log(data);
        },
        (error)=>{ // CATCH
          console.log(error);
        }
      );
  }
}
