import { Component, OnInit } from '@angular/core';
import { InstrumentoService } from '../../servicios/http/instrumento.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-ruta-editar-instrumento',
  templateUrl: './ruta-editar-instrumento.component.html',
  styleUrls: ['./ruta-editar-instrumento.component.css'],
})
export class RutaEditarInstrumentoComponent implements OnInit {
  instrumento;

  mostrarFormulario: boolean = false;

  constructor(
    private readonly _instrumentoService: InstrumentoService,
    private readonly _activateRoute: ActivatedRoute,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    const obsRuta = this._activateRoute.params;
    obsRuta.subscribe((parametros: Params) => {
      const id = Number(parametros.id);
      const obsInstrumento = this._instrumentoService.obtenerUnoPorId(id);
      obsInstrumento.subscribe(
        (inst: any) => {
          this.instrumento = inst;
          this.llenarFormularioConDtosDeInstrumento();
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }

  llenarFormularioConDtosDeInstrumento() {
    this.mostrarFormulario = true;
  }

  editarInstrumento(instrumento) {
    const obsEditarUsuario = this._instrumentoService.editar(
      instrumento,
      this.instrumento.id
    );
    obsEditarUsuario.subscribe(
      (datos) => {
        const url = ['/instrumento', 'lista'];
        this._router.navigate(url);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
