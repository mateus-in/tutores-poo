export abstract class Usuario {
  protected emprestimosAtivos: number = 0;

  constructor(
    public nome: string,
    public id: string,
    public email: string
  ) {}

  abstract calcularPrazoEmprestimo(): number;
  abstract obterLimiteEmprestimos(): number;

  podeEmprestar(): boolean {
    return this.emprestimosAtivos < this.obterLimiteEmprestimos();
  }

  adicionarEmprestimo(): void {
    this.emprestimosAtivos++;
  }

  removerEmprestimo(): void {
    if (this.emprestimosAtivos > 0) {
      this.emprestimosAtivos--;
    }
  }

  obterEmprestimosAtivos(): number {
    return this.emprestimosAtivos;
  }
}
