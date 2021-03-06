// usuario.service.ts
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class UsuarioService {
  url = 'http://localhost:1337'
  // Constructores en angular sirven para
  // Inyección de Dependencias
  constructor(
    private readonly _httpClient:HttpClient
  ) {
  }
  traerTodos(){
    return this._httpClient.get(this.url + '/Usuario')
  }

  // POST /Usuario
  crear(usuario){
    return this._httpClient.post(this.url + '/Usuario', usuario);
  }

  obtenerUnoPorId(idUsuario: number){
    return this._httpClient.get(this.url + '/Usuario/' + idUsuario);
  }

  eliminar(idUsuario: number){
    return this._httpClient.delete(
      this.url+'/Usuario/'+ idUsuario
    )
  }


}
