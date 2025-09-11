import { Usuario } from './Usuario';

export class Estudante extends Usuario {
  constructor(
    nome: string,
    id: string,
    email: string,
    public curso: string
  ) {
    super(nome, id, email);
  }

  calcularPrazoEmprestimo(): number {
    return 7; // 7 dias
  }

  obterLimiteEmprestimos(): number {
    return 3; // máximo 3 livros
  }
}
