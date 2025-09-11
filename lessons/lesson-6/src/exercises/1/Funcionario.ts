import { Usuario } from './Usuario';

export class Funcionario extends Usuario {
  constructor(
    nome: string,
    id: string,
    email: string,
    public setor: string
  ) {
    super(nome, id, email);
  }

  calcularPrazoEmprestimo(): number {
    return 15; // 15 dias
  }

  obterLimiteEmprestimos(): number {
    return 5; // máximo 5 livros
  }
}
