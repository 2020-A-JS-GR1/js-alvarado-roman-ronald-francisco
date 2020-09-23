import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class InstrumentoService{

  url: string = 'http://localhost:1337';

  constructor(
    private readonly _httpClient:HttpClient
  ) {
  }

  traerTodos(){
    return this._httpClient.get(this.url + '/Instrumento');
  }

  crear(instrumento){
    return this._httpClient.post(this.url + '/Instrumento', instrumento);
  }

  obtenerUnoPorId(idUsuario: number){
    return this._httpClient.get(this.url + '/Instrumento/'+idUsuario);
  }

  eliminar(idUsuario: number){
    return this._httpClient.delete(this.url+'/Instrumento/'+idUsuario);
  }

  editar(instrumento, id: number){
    return this._httpClient.put(this.url+'/Instrumento/'+id, instrumento);
  }

}
