import { LivrosService } from './../livros.service';
import { Livro } from './../model';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-livros-cadastro',
  templateUrl: './livros-cadastro.component.html',
  styleUrls: ['./livros-cadastro.component.css']
})
export class LivrosCadastroComponent implements OnInit {

  livro = new Livro();

  constructor(
    private service: LivrosService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
    //private rotaP: Router
  ) { }

  inserir(form: FormControl) {
    this.service.adicionar(this.livro)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Livro '+this.livro.titulo+' cadastrada'});
      form.reset();
    });
  }

  ngOnInit() {
    const codigoLivro = this.rota.snapshot.params['id'];
    if(codigoLivro){
      this.carregarLivro(codigoLivro);
    }
  }

  carregarLivro(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.livro = data;
      }
    );
  }

  alterar(form: FormControl) {
    this.service.alterar(this.livro)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Livro '+this.livro.titulo+' alterada'});
      form.reset();
    });
  }

  salvar(form: FormControl) {
    if(this.editando){
      this.alterar(form);
    }else{
      this.inserir(form);
    }
    //this.rotaP.navigate(['/livros']);
  }

  get editando(){
    return Boolean(this.livro.id);
  }



}
