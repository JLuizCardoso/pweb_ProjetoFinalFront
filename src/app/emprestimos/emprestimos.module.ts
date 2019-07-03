import { MessageService } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmprestimosCadastroComponent } from './emprestimos-cadastro/emprestimos-cadastro.component';
import { EmprestimosPesquisaComponent } from './emprestimos-pesquisa/emprestimos-pesquisa.component';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [EmprestimosCadastroComponent, EmprestimosPesquisaComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule
  ],
  exports: [
    EmprestimosCadastroComponent,
    EmprestimosPesquisaComponent
  ],
  providers: [
    MessageService,
    EmprestimosModule
  ]
})
export class EmprestimosModule { }
