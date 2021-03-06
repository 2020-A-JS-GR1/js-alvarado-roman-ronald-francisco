import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../componentes/servicios/http/usuario.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-usuario',
  templateUrl: './ruta-editar-usuario.component.html',
  styleUrls: ['./ruta-editar-usuario.component.css']
})
export class RutaEditarUsuarioComponent implements OnInit {
  usuario;
  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _activatedRoute: ActivatedRoute
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
              },
              (error) => {
                console.error(error);
              }
            )
        }
      )
  }

}
