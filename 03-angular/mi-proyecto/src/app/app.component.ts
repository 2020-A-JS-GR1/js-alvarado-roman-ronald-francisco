import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "./componentes/servicios/http/usuario.service";
import {errorObject} from "rxjs/internal-compatibility";
import {AuthService} from "./componentes/servicios/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mi-proyecto';
  habilitado = true;

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

  arregloUsuarios =[];

  arregloObservables = [];
  arregloNumeros = [1,2,3]

  // Inyectar Dependencias
  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _authService: AuthService
  ) {
  }

  ngOnInit():void {
    this.mensajeConsola(true);
  }

  mensajeConsola(objeto: boolean) {
    console.log('Llego el evento', objeto);
    const observableTraerTodos = this._usuarioService.traerTodos();
    const suscripcion = observableTraerTodos
      .subscribe(
        (data)=>{ // THEN TRY
          this.arregloUsuarios = data as any[];
          console.log("este es el arreglo" + data);
        },
        (error)=>{ // CATCH
          console.log(error);
        }
      );
    //this.arregloObservables.push(suscripcion);
    //suscripcion.unsubscribe();
  }

  crearUusario(){
    const usuarioNuevo = {
      cedula:"1234567878",
      nombre:"Naruto",
      apellido: "Uzumaki"
    };
    const obsCrearUsuario = this._usuarioService.crear(usuarioNuevo);
    obsCrearUsuario
      .subscribe(
        (datos: object) => {
          console.log('Nuevo Usuario',datos);
          this.mensajeConsola(true);
        },
        (error) => {
          console.error('Error', error);
        }
      )
  }
}
