import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from './../model';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios-cadastro',
  templateUrl: './usuarios-cadastro.component.html',
  styleUrls: ['./usuarios-cadastro.component.css']
})
export class UsuariosCadastroComponent implements OnInit {

  usuario = new Usuario();

  constructor(
    private service: UsuariosService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
    //private rotaP: Router
  ) { }

  inserir(form: FormControl) {
    this.service.adicionar(this.usuario)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Usuario '+this.usuario.nome+' cadastrada'});
      form.reset();
    });
  }

  ngOnInit() {
    const codigoUsuario = this.rota.snapshot.params['id'];
    if(codigoUsuario){
      this.carregarUsuario(codigoUsuario);
    }
  }

  carregarUsuario(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.usuario = data;
      }
    );
  }

  alterar(form: FormControl) {
    this.service.alterar(this.usuario)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Livro '+this.usuario.nome+' alterada'});
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
    return Boolean(this.usuario.id);
  }

}
