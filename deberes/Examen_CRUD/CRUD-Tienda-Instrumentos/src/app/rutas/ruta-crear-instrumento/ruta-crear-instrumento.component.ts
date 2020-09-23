import { Component, OnInit } from '@angular/core';
import {InstrumentoService} from "../../servicios/http/instrumento.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-crear-instrumento',
  templateUrl: './ruta-crear-instrumento.component.html',
  styleUrls: ['./ruta-crear-instrumento.component.css']
})
export class RutaCrearInstrumentoComponent implements OnInit {

  constructor(
    private readonly _instrumentoService: InstrumentoService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearInstrumento(instrumento){
    const obsCrearInstrumento = this._instrumentoService.crear(instrumento);
    obsCrearInstrumento
      .subscribe(
        (datos) => {
          const url = ['/instrumento', 'lista'];
          this._router.navigate(url);
        },
        (error)=> {
          console.error(error);
        }
      )
  }

}
