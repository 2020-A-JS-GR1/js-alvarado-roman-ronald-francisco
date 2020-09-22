import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../componentes/servicios/http/usuario.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-usuario',
  templateUrl: './ruta-editar-usuario.component.html',
  styleUrls: ['./ruta-editar-usuario.component.css']
})
export class RutaEditarUsuarioComponent implements OnInit {
  usuario;

  mostrarFormulario: boolean = false;

  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta
      .subscribe(
        (parametros: Params) => { //try
          const id = Number(parametros.id);
          const obsUsuario = this._usuarioService
            .obtenerUnoPorId(id);
          obsUsuario
            .subscribe(
              (usuario: any) => {
                this.usuario = usuario;
                this.llenarFormularioConDtosDeUsuario();
              },
              (error) => {
                console.error(error);
              }
            )
        }
      )
  }

  llenarFormularioConDtosDeUsuario(){
    this.mostrarFormulario = true;
  }

  editarUsuario(usuario){
    const obsEditarUsuario = this._usuarioService.editar(usuario, this.usuario.id)
    obsEditarUsuario
      .subscribe(
        (datos)=>{
            const url = ['/usuario','lista']
            this._router.navigate(url);
        },
        (error)=>{
          console.error(error);
        }
      )
  }

}
