import { LivrosService } from './../livros.service';
import { Livro } from './../model';
import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-livros-pesquisa',
  templateUrl: './livros-pesquisa.component.html',
  styleUrls: ['./livros-pesquisa.component.css']
})
export class LivrosPesquisaComponent implements OnInit {

  livros = [];
  nomeBusca:string;

  constructor(
    private service:LivrosService,
    private msg: MessageService,
    private conf: ConfirmationService
    ) { }


  pesquisar(){
    this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
      this.livros=dados;
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

  confirmarExclusao(livro:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+livro.nome+'?',
      accept: () => {
        this.excluir(livro);
      }
    });
  }

  excluir(livro: any){
    this.service.excluir(livro.id)
    .then(() => {
      this.pesquisar();
      this.msg.add({severity:'warn', summary:'Excluido com Sucesso!', detail:'Via MessageService'});
    });

  }
}
