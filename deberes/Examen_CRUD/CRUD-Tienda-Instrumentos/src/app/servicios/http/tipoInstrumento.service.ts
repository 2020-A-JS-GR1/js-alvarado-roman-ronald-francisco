import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TipoInstrumentoService {
  url: string = 'http://localhost:1337';

  constructor(private readonly _httpClient: HttpClient) {}

  traerTodos() {
    return this._httpClient.get(this.url + '/TipoInstrumento');
  }

  crear(instrumento) {
    return this._httpClient.post(this.url + '/TipoInstrumento', instrumento);
  }
}
