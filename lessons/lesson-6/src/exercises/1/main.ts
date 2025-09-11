import { Biblioteca } from './Biblioteca';
import { Estudante } from './Estudante';
import { Professor } from './Professor';
import { Funcionario } from './Funcionario';
import { Livro } from './Livro';

// Exemplo simples de uso do sistema de biblioteca
function exemploSistemaBiblioteca() {
  console.log('=== SISTEMA DE BIBLIOTECA ===\n');

  // Criar biblioteca
  const biblioteca = new Biblioteca();

  // Criar usuários
  const estudante = new Estudante('João Silva', 'EST001', 'joao@email.com', 'Engenharia');
  const professor = new Professor('Dr. Maria Costa', 'PROF001', 'maria@email.com', 'Computação');
  const funcionario = new Funcionario('Carlos Santos', 'FUNC001', 'carlos@email.com', 'Biblioteca');

  // Adicionar usuários
  biblioteca.adicionarUsuario(estudante);
  biblioteca.adicionarUsuario(professor);
  biblioteca.adicionarUsuario(funcionario);

  // Criar livros
  const livro1 = new Livro('Clean Code', 'Robert Martin', '978-0132350884');
  const livro2 = new Livro('Design Patterns', 'Gang of Four', '978-0201633612');
  const livro3 = new Livro('Algoritmos', 'Thomas Cormen', '978-8535236996');

  // Adicionar livros
  biblioteca.adicionarLivro(livro1);
  biblioteca.adicionarLivro(livro2);
  biblioteca.adicionarLivro(livro3);

  // Mostrar informações iniciais
  console.log('=== INFORMAÇÕES DOS USUÁRIOS ===');
  console.log(`${estudante.nome} - Prazo: ${estudante.calcularPrazoEmprestimo()} dias, Limite: ${estudante.obterLimiteEmprestimos()} livros`);
  console.log(`${professor.nome} - Prazo: ${professor.calcularPrazoEmprestimo()} dias, Limite: ${professor.obterLimiteEmprestimos()} livros`);
  console.log(`${funcionario.nome} - Prazo: ${funcionario.calcularPrazoEmprestimo()} dias, Limite: ${funcionario.obterLimiteEmprestimos()} livros\n`);

  // Realizar empréstimos
  console.log('=== REALIZANDO EMPRÉSTIMOS ===');
  biblioteca.realizarEmprestimo('EST001', '978-0132350884');
  biblioteca.realizarEmprestimo('PROF001', '978-0201633612');
  biblioteca.realizarEmprestimo('FUNC001', '978-8535236996');
  console.log();

  // Tentar emprestar livro já emprestado
  console.log('=== TENTATIVA DE EMPRÉSTIMO DUPLICADO ===');
  biblioteca.realizarEmprestimo('EST001', '978-0132350884');
  console.log();

  // Mostrar empréstimos ativos
  biblioteca.listarEmprestimosAtivos();
  console.log();

  // Mostrar livros disponíveis
  biblioteca.listarLivrosDisponiveis();
  console.log();

  // Realizar devolução
  console.log('=== REALIZANDO DEVOLUÇÃO ===');
  biblioteca.realizarDevolucao('EST001', '978-0132350884');
  console.log();

  // Mostrar estatísticas
  biblioteca.obterEstatisticas();
  console.log();

  console.log('=== CONCEITOS POO DEMONSTRADOS ===');
  console.log('✓ Herança: Usuario → Estudante, Professor, Funcionario');
  console.log('✓ Polimorfismo: calcularPrazoEmprestimo() diferente para cada tipo');
  console.log('✓ Encapsulamento: Validações internas nas classes');
  console.log('✓ Abstração: Classe abstrata Usuario com métodos abstratos');
}

// Executar exemplo
exemploSistemaBiblioteca();
