import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formlario-usuario',
  templateUrl: './formlario-usuario.component.html',
  styleUrls: ['./formlario-usuario.component.css']
})
export class FormlarioUsuarioComponent implements OnInit {
  nombreModelo: string;
  cedulaModelo: string;
  estadoCivilModelo: string;

  constructor() { }

  ngOnInit(): void {
  }

  crearUsuario(formulario){
    const cedula = this.cedulaModelo;
    const esNumero = !isNaN(Number(cedula))
    if(esNumero){
      // Llamar al servicio http y enviar un post al servidor con los
      // datos del formulario
      console.log('Listo')
    }else{
      console.error('No es un numero')
    }
  }

  ayuda(){
    alert('ayuda');
  }
}
