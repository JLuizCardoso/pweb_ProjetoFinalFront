import { Usuario } from './../model';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-usuarios-pesquisa',
  templateUrl: './usuarios-pesquisa.component.html',
  styleUrls: ['./usuarios-pesquisa.component.css']
})
export class UsuariosPesquisaComponent implements OnInit {

  usuarios = [];
  nomeBusca:string;

  constructor(
    private service:UsuariosService,
    private msg: MessageService,
    private conf: ConfirmationService
    ) { }


  pesquisar(){
    this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
      this.usuarios=dados;
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

  confirmarExclusao(usuario:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+usuario.nome+'?',
      accept: () => {
        this.excluir(usuario);
      }
    });
  }

  excluir(usuario: any){
    this.service.excluir(usuario.id)
    .then(() => {
      this.pesquisar();
      this.msg.add({severity:'warn', summary:'Excluido com Sucesso!', detail:'Via MessageService'});
    });

  }

}
