import { Livro } from './Livro';
import { Membro } from './Membro';

export class Biblioteca {
  private _livros: Livro[] = [];
  private _membros: Membro[] = [];

  // getters
  get membros() {
    return this._membros;
  }

  get livros() {
    return this._livros;
  }

  // setters
  set membros(membros: Membro[]) {
    this._membros = membros;
  }

  set livros(livros: Livro[]) {
    this._livros = livros;
  }

  // methods
  cadastrarLivro(livro: Livro) {
    this._livros.push(livro);
    console.log(`Livro "${livro.titulo}" cadastrado!`);
  }

  cadastrarMembro(membro: Membro): void {
    this._membros.push(membro);
    console.log(`Membro "${membro.nome}" cadastrado!`);
  }

  emprestarLivro(idLivro: string, idMembro: string): void {
    const livro = this._livros.find((l) => l.id === idLivro);
    const membro = this._membros.find((l) => l.id === idMembro);

    if (!livro) {
      console.log(`Erro: Livro "${idLivro} não encontrado!"`);
      return;
    }

    if (!livro.disponivel) {
      console.log(`Erro: Livro "${idLivro}" não disponível!`);
    }

    if (!membro) {
      console.log(`Erro: Membro "${idMembro} não encontrado!"`);
      return;
    }

    livro.disponivel = false;
    membro.livrosEmprestados.push(livro);
    console.log(`"${livro.titulo}" emprestado para "${membro.nome}"`);
  }

  devolverLivro(idLivro: string, idMembro: string) {
    const livro = this._livros.find((l) => l.id === idLivro);
    const membro = this._membros.find((l) => l.id === idMembro);

    if (!livro || !membro) {
      console.log('Erro: Livro ou membro não encontrados!');
      return;
    }

    const indexLivroDevolver = membro.livrosEmprestados.findIndex((l) => l.id === idLivro);
    if (indexLivroDevolver === -1) {
      console.log(`Erro: O membro "${membro.nome} não possui o livro ${livro.titulo}"`);
      return;
    }

    livro.disponivel = true;
    membro.livrosEmprestados.splice(indexLivroDevolver, 1);
    console.log(`"${livro.titulo}" devolvido por "${membro.nome}"`);
  }
}
