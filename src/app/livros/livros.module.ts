import { LivrosService } from './livros.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosPesquisaComponent } from './livros-pesquisa/livros-pesquisa.component';
import { LivrosCadastroComponent } from './livros-cadastro/livros-cadastro.component';

import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LivrosPesquisaComponent, LivrosCadastroComponent],
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

  exports:[
    LivrosCadastroComponent,
    LivrosPesquisaComponent
  ],

  providers:[
    LivrosService,
    MessageService
  ]
})
export class LivrosModule { }
