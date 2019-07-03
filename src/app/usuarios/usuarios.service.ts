import { Usuario } from './model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarioURL = 'http://localhost:8080/usuarios';
  urlFiltro;
  constructor(private http: HttpClient) { }


  excluir(id:number):Promise<void>{
    return this.http.delete(this.usuarioURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  pesquisar(filtro: any): Promise<any> {

    if(filtro.nome){
      this.urlFiltro = 'http://localhost:8080/usuarios/filtro?nome='+filtro.nome;
    }else{
      this.urlFiltro = 'http://localhost:8080/usuarios';
    }

    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  alterar(usuario: Usuario): Promise<any>{
    return this.http.put(this.usuarioURL+'/'+usuario.id, usuario)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Usuario> {
    return this.http.get<Usuario>(this.usuarioURL+'/'+codigo).toPromise();
  }

  adicionar(usuario: Usuario): Promise<any>{
    return this.http.post(this.usuarioURL, usuario)
    .toPromise();
  }
}
