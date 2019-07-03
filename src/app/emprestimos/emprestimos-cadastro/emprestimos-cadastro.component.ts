import { EmprestimosService } from './../emprestimos.service';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Emprestimo } from './../model';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-emprestimos-cadastro',
  templateUrl: './emprestimos-cadastro.component.html',
  styleUrls: ['./emprestimos-cadastro.component.css']
})
export class EmprestimosCadastroComponent implements OnInit {

  emprestimo = new Emprestimo();

  constructor(
    private service: EmprestimosService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
    //private rotaP: Router
  ) { }

  inserir(form: FormControl) {
    this.service.adicionar(this.emprestimo)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Emprestimo cadastrado'});
      form.reset();
    });
  }

  ngOnInit() {
    const codigoEmprestimo = this.rota.snapshot.params['id'];
    if(codigoEmprestimo){
      this.carregarEmprestimo(codigoEmprestimo);
    }
  }

  carregarEmprestimo(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.emprestimo = data;
      }
    );
  }

  alterar(form: FormControl) {
    this.service.alterar(this.emprestimo)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Emprestimo alterado'});
      form.reset();
    });
  }

  salvar(form: FormControl) {
    if(this.editando){
      this.alterar(form);
    }else{
      this.inserir(form);
    }
  }

  get editando(){
    return Boolean(this.emprestimo.id);
  }

}
