import { MessageService } from 'primeng/api';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosCadastroComponent } from './usuarios-cadastro/usuarios-cadastro.component';
import { UsuariosPesquisaComponent } from './usuarios-pesquisa/usuarios-pesquisa.component';

@NgModule({
  declarations: [UsuariosCadastroComponent, UsuariosPesquisaComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextModule,
    DropdownModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule,
    RadioButtonModule
  ],
  exports:[
    UsuariosCadastroComponent,
    UsuariosPesquisaComponent
  ],
  providers:[
    MessageService,
    UsuariosModule
  ]
})
export class UsuariosModule { }

