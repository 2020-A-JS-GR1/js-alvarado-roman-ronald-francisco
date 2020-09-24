import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoInstrumentoService } from 'src/app/servicios/http/tipoInstrumento.service';

@Component({
  selector: 'app-formulario-tipo-instrumento',
  templateUrl: './formulario-tipo-instrumento.component.html',
  styleUrls: ['./formulario-tipo-instrumento.component.css'],
})
export class FormularioTipoInstrumentoComponent implements OnInit {
  nombreModelo: string;

  constructor(
    private readonly _tipoInstrumentoService: TipoInstrumentoService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {}

  crearTipoInstrumento(tipoInstrumento) {
    const obsTipoInstrumento = this._tipoInstrumentoService.crear(
      JSON.stringify(tipoInstrumento.value)
    );
    obsTipoInstrumento.subscribe(
      () => {
        const url = ['/instrumento', 'lista'];
        this._router.navigate(url);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
