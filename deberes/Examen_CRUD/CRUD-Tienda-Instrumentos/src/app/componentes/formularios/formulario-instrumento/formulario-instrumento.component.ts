import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TipoInstrumentoService} from "../../../servicios/http/tipoInstrumento.service";

@Component({
  selector: 'app-formulario-instrumento',
  templateUrl: './formulario-instrumento.component.html',
  styleUrls: ['./formulario-instrumento.component.css']
})
export class FormularioInstrumentoComponent implements OnInit {

  @Input()
  nombreInput: string;

  @Input()
  precioInput: string;

  @Input()
  materialInput: boolean;

  @Output()
  informacionValidada: EventEmitter<any> = new EventEmitter<any>();

  nombreModelo: string;
  precioModelo: string;
  materialModelo: boolean;
  tipoModelo: number;

  tipoInstrumento = [];

  constructor(
    private readonly _tipoInstrumentoService: TipoInstrumentoService
  ) { }

  ngOnInit(): void {
    if(this.nombreInput && this.precioInput && this.materialInput){
      this.nombreModelo = this.nombreInput;
      this.precioModelo = this.precioInput;
      this.materialModelo = this.materialInput;
    }

    this.obtenerTipoInstrumento();


  }

  crearInstrumento(formulario){
      this.informacionValidada.emit({
        nombre: this.nombreModelo,
        precio: this.precioModelo,
        material: this.materialModelo,
        tipo: this.tipoModelo
      })
  }

  obtenerTipoInstrumento(){
    const obsObtenerTipoInstrumento = this._tipoInstrumentoService.traerTodos();
    obsObtenerTipoInstrumento
      .subscribe(
        (tipoInstrumento: any[])=>{
          this.tipoInstrumento = tipoInstrumento;
        },
        (error) => {
          console.error(error);
        }
      )
  }

}
