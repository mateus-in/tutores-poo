export class Produto {
  constructor(
    public nome: string,
    public quantidadeEstoque: number,
    public precoUnitario: number,
    public estoqueMinimo: number,
  ) {}

  temEstoqueSuficiente(quantidade: number): boolean {
    return this.quantidadeEstoque < 1;
  }

  consumir(quantidade: number): boolean {
    return this.quantidadeEstoque >= quantidade;
  }

  precisaReposicao(): boolean {
    return this.quantidadeEstoque < this.estoqueMinimo;
  }
}
