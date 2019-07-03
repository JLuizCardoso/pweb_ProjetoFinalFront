import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmprestimosCadastroComponent } from './emprestimos-cadastro/emprestimos-cadastro.component';
import { EmprestimosPesquisaComponent } from './emprestimos-pesquisa/emprestimos-pesquisa.component';

@NgModule({
  declarations: [EmprestimosCadastroComponent, EmprestimosPesquisaComponent],
  imports: [
    CommonModule
  ]
})
export class EmprestimosModule { }
