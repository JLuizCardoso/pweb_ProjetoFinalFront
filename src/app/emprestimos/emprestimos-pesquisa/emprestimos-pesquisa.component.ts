import { EmprestimosService } from './../emprestimos.service';
import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-emprestimos-pesquisa',
  templateUrl: './emprestimos-pesquisa.component.html',
  styleUrls: ['./emprestimos-pesquisa.component.css']
})
export class EmprestimosPesquisaComponent implements OnInit {

  emprestimos = [];
  nomeBusca:string;

  constructor(
    private service:EmprestimosService,
    private msg: MessageService,
    private conf: ConfirmationService
    ) { }


  pesquisar(){
    this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
      this.emprestimos=dados;
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

  confirmarExclusao(emprestimo:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(emprestimo);
      }
    });
  }

  excluir(emprestimo: any){
    this.service.excluir(emprestimo.id)
    .then(() => {
      this.pesquisar();
      this.msg.add({severity:'warn', summary:'Excluido com Sucesso!', detail:'Via MessageService'});
    });

  }

}


