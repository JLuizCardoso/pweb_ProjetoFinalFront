import { LivrosCadastroComponent } from './livros/livros-cadastro/livros-cadastro.component';
import { UsuariosCadastroComponent } from './usuarios/usuarios-cadastro/usuarios-cadastro.component';
import { UsuariosPesquisaComponent } from './usuarios/usuarios-pesquisa/usuarios-pesquisa.component';
import { ConfirmationService } from 'primeng/api';
import { LivrosModule } from './livros/livros.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import {SidebarModule} from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivrosPesquisaComponent } from './livros/livros-pesquisa/livros-pesquisa.component';

const rotas: Routes = [
  {path: '', redirectTo:'emprestimos', pathMatch:'full'},
  {path: 'usuarios', component: UsuariosPesquisaComponent},
  {path: 'usuarios/novo', component: UsuariosCadastroComponent},
  {path: 'usuarios/:id', component: UsuariosCadastroComponent},
  {path: 'livros', component: LivrosPesquisaComponent},
  {path: 'livros/novo', component: LivrosCadastroComponent},
  {path: 'livros/:id', component: LivrosCadastroComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LivrosModule,
    SidebarModule,
    ButtonModule,
    RouterModule.forRoot(rotas)

  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
