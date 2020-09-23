import { Component, OnInit } from '@angular/core';
import {InstrumentoService} from "../../servicios/http/instrumento.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-lista-instrumento',
  templateUrl: './ruta-lista-instrumento.component.html',
  styleUrls: ['./ruta-lista-instrumento.component.css']
})
export class RutaListaInstrumentoComponent implements OnInit {

  arregloInstrumentos = [];

  constructor(
    private readonly _instrumentoService: InstrumentoService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const obsTraerTodos = this._instrumentoService
      .traerTodos();
    obsTraerTodos.subscribe(
      (instrumentos: any[]) => {
        this.arregloInstrumentos = instrumentos;
      },
      (error) => {
        console.error('Error', error);
      }
    )
  }

  eliminarInstrumento(id: number){
    const obsEliminar = this._instrumentoService.eliminar(id);
    obsEliminar
      .subscribe(
        ()=>{
          const indice = this.arregloInstrumentos.findIndex(u => u.id === id);
          this.arregloInstrumentos.splice(indice,1);
        },
        (error)=>{
          console.error(error);
        }
      )
  }

  irAEditarInstrumento(id: number){
     const url = ['/instrumento','editar', id];
     this._router.navigate(url);
  }

}
