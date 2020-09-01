import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent implements OnInit {

  @Input()
  urlImage: string;

  @Input()
  descripcion: string;

  @Input()
  nombreBoton: string;

  urlEjemploImagen=""

  linkTextoEjmplo = "https://www.google.com.ec"

  textoEjemplo = "Ronald";

  constructor() { }

  ngOnInit(): void {
  }

  ejemplpoFuncion(){
    alert('HOLA');
  }

  eventoOnBlur(){
    console.log('Blur');
  }

}
