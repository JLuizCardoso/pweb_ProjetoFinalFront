import { Livro } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  livrosURL = 'http://localhost:8080/livros';
  urlFiltro;
  constructor(private http: HttpClient) { }


  excluir(id:number):Promise<void>{
    return this.http.delete(this.livrosURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  pesquisar(filtro: any): Promise<any> {

    if(filtro.nome){
      this.urlFiltro = 'http://localhost:8080/livros/filtro?nome='+filtro.nome;
    }else{
      this.urlFiltro = 'http://localhost:8080/livros';
    }

    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  alterar(livro: Livro): Promise<any>{
    return this.http.put(this.livrosURL+'/'+livro.id, livro)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Livro> {
    return this.http.get<Livro>(this.livrosURL+'/'+codigo).toPromise();
  }

  adicionar(livro: Livro): Promise<any>{
    return this.http.post(this.livrosURL, livro)
    .toPromise();
  }
}
