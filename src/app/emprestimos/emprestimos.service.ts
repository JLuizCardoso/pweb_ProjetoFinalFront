import { Emprestimo } from './model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmprestimosService {

  emprestimosURL = 'http://localhost:8080/emprestimos';
  urlFiltro;
  constructor(private http: HttpClient) { }


  excluir(id:number):Promise<void>{
    return this.http.delete(this.emprestimosURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  pesquisar(filtro: any): Promise<any> {

    if(filtro.nome){
      this.urlFiltro = 'http://localhost:8080/emprestimos/filtro?nome='+filtro.nome;
    }else{
      this.urlFiltro = 'http://localhost:8080/emprestimos';
    }

    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  alterar(emprestimo: Emprestimo): Promise<any>{
    return this.http.put(this.emprestimosURL+'/'+emprestimo.id, emprestimo)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Emprestimo> {
    return this.http.get<Emprestimo>(this.emprestimosURL+'/'+codigo).toPromise();
  }

  adicionar(emprestimo: Emprestimo): Promise<any>{
    return this.http.post(this.emprestimosURL, emprestimo)
    .toPromise();
  }
}



