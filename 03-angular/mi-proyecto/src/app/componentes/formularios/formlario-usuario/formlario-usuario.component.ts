import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formlario-usuario',
  templateUrl: './formlario-usuario.component.html',
  styleUrls: ['./formlario-usuario.component.css']
})
export class FormlarioUsuarioComponent implements OnInit {
  @Input()
  nombreInput: string;

  @Input()
  cedulaInput: string;

  @Input()
  estadoCivilInput: string;

  @Output()
  informacionValidada: EventEmitter<any> = new EventEmitter<any>();

  nombreModelo: string;
  cedulaModelo: string;
  estadoCivilModelo: string;

  constructor() { }

  ngOnInit(): void {
    if(this.nombreInput && this.cedulaInput && this.estadoCivilInput){
      this.nombreModelo = this.nombreInput;
      this.cedulaModelo = this.cedulaInput;
      this.estadoCivilModelo = this.estadoCivilInput;
    }
  }

  crearUsuario(formulario){
    const cedula = this.cedulaModelo;
    const esNumero = !isNaN(Number(cedula))
    if(esNumero){
      // Llamar al servicio http y enviar un post al servidor con los
      // datos del formulario
      console.log('Listo')
      this.informacionValidada.emit({
        nombre: this.nombreModelo,
        cedula: this.cedulaModelo,
        estadoCivil: this.estadoCivilModelo
      })
    }else{
      console.error('No es un numero')
    }
  }

  ayuda(){
    alert('ayuda');
  }
}
