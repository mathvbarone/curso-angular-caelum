import { Http, Headers, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import { FotoComponent } from './foto.component';
import { Injectable } from '@angular/core';

@Injectable()

export class FotoService {

    http: Http
    URL: string = 'http://localhost:3000/v1/fotos'
    cabecalho: Headers

    constructor(http: Http) {
        this.http = http
        this.cabecalho = new Headers()
        this.cabecalho.append('Content-type', 'application/json')
    }

    pegarTodos(): Observable<FotoComponent[]> {
        const stream = this.http.get(this.URL)
            .map(dados => dados.json())

        return stream
    }

    cadastrar(foto: FotoComponent): Observable<Response> {
        const stream = this.http.post(
            this.URL,
            JSON.stringify(foto),
            { headers: this.cabecalho }
        )

        return stream
    }

    apagar(foto: FotoComponent): Observable<Response>{
        return this.http.delete(`${this.URL}/${foto._id}`)
    }
    pegaUm(id: string): Observable<FotoComponent>{
        return this.http.get(`${this.URL}/${id}`)
                        .map(dados => dados.json())
    }

    atualiza(foto: FotoComponent): Observable<Response>{
        return this.http.put(
                                `${this.URL}/${foto._id}`,
                                foto,
                                { headers: this.cabecalho }
                            )
    }

}