import { Livro } from './../livros/model';
import { Usuario } from './../usuarios/model';

export class Emprestimo{
  id: number;
  user: Usuario;
  dtEmprestimo: string;
  dtAtual: string;
  livro1: Livro;
  livro2: Livro;
  livro3: Livro;
}
