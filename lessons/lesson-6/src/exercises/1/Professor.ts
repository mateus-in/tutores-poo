import { Usuario } from './Usuario';

export class Professor extends Usuario {
  constructor(
    nome: string,
    id: string,
    email: string,
    public departamento: string
  ) {
    super(nome, id, email);
  }

  calcularPrazoEmprestimo(): number {
    return 30; // 30 dias
  }

  obterLimiteEmprestimos(): number {
    return 10; // máximo 10 livros
  }
}
