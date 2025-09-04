export class Funcionario {
  private avaliacoes: number[] = [];
  constructor(public nome: string, public id: number, protected salarioBase: number) {}

  calcularSalarioFinal(): number {
    return this.salarioBase;
  }

  receberAvaliacao(nota: number): void {
    this.avaliacoes.push(nota);
  }

  obterMediaAvaliacoes(): number {
    if (this.avaliacoes.length === 0) return 0;
    const soma = this.avaliacoes.reduce((acc, nota) => acc + nota, 0);
    return soma / this.avaliacoes.length;
  }
}
