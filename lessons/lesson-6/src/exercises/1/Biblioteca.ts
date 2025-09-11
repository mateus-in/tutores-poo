import { Usuario } from './Usuario';
import { Livro } from './Livro';
import { Emprestimo } from './Emprestimo';

export class Biblioteca {
  private usuarios: Usuario[] = [];
  private livros: Livro[] = [];
  private emprestimos: Emprestimo[] = [];

  adicionarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
  }

  realizarEmprestimo(usuarioId: string, isbn: string): boolean {
    const usuario = this.usuarios.find(u => u.id === usuarioId);
    const livro = this.livros.find(l => l.isbn === isbn);

    if (!usuario) {
      console.log('Usuário não encontrado');
      return false;
    }

    if (!livro) {
      console.log('Livro não encontrado');
      return false;
    }

    if (!livro.disponivel) {
      console.log('Livro não está disponível');
      return false;
    }

    if (!usuario.podeEmprestar()) {
      console.log('Usuário atingiu o limite de empréstimos');
      return false;
    }

    // Realizar empréstimo
    livro.emprestar();
    usuario.adicionarEmprestimo();
    
    const emprestimo = new Emprestimo(usuario, livro);
    this.emprestimos.push(emprestimo);

    console.log(`Empréstimo realizado: ${livro.titulo} para ${usuario.nome}`);
    return true;
  }

  realizarDevolucao(usuarioId: string, isbn: string): boolean {
    const emprestimo = this.emprestimos.find(
      e => e.usuario.id === usuarioId && e.livro.isbn === isbn
    );

    if (!emprestimo) {
      console.log('Empréstimo não encontrado');
      return false;
    }

    // Calcular multa se houver
    const multa = emprestimo.calcularMulta();
    if (multa > 0) {
      console.log(`Multa a pagar: R$ ${multa}`);
    }

    // Realizar devolução
    emprestimo.livro.devolver();
    emprestimo.usuario.removerEmprestimo();

    // Remover empréstimo da lista
    const index = this.emprestimos.indexOf(emprestimo);
    this.emprestimos.splice(index, 1);

    console.log(`Devolução realizada: ${emprestimo.livro.titulo}`);
    return true;
  }

  listarEmprestimosAtivos(): void {
    console.log('=== EMPRÉSTIMOS ATIVOS ===');
    
    if (this.emprestimos.length === 0) {
      console.log('Nenhum empréstimo ativo');
      return;
    }

    this.emprestimos.forEach(emprestimo => {
      console.log(emprestimo.obterInformacoes());
    });
  }

  listarLivrosDisponiveis(): void {
    console.log('=== LIVROS DISPONÍVEIS ===');
    
    const livrosDisponiveis = this.livros.filter(l => l.disponivel);
    
    if (livrosDisponiveis.length === 0) {
      console.log('Nenhum livro disponível');
      return;
    }

    livrosDisponiveis.forEach(livro => {
      console.log(livro.obterInformacoes());
    });
  }

  obterEstatisticas(): void {
    console.log('=== ESTATÍSTICAS DA BIBLIOTECA ===');
    console.log(`Total de usuários: ${this.usuarios.length}`);
    console.log(`Total de livros: ${this.livros.length}`);
    console.log(`Livros emprestados: ${this.emprestimos.length}`);
    console.log(`Livros disponíveis: ${this.livros.filter(l => l.disponivel).length}`);
    
    const emprestimosAtrasados = this.emprestimos.filter(e => e.estaAtrasado()).length;
    console.log(`Empréstimos atrasados: ${emprestimosAtrasados}`);
  }
}
