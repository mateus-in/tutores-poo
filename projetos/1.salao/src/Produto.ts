
export class Produto {
  constructor(
    public id: string,
    public nome: string,
    public quantidadeEstoque: number,
    public precoUnitario: number,
    public estoqueMinimo: number
  ) {}

  temEstoqueSuficiente(quantidade: number): boolean {
    return this.quantidadeEstoque >= quantidade;
  }

  consumir(quantidade: number): void {
    if (!this.temEstoqueSuficiente(quantidade)) {
      throw new Error('Produto em falta para realizar o serviço.');
    }
    this.quantidadeEstoque -= quantidade;
  }

  precisaReposicao(): boolean {
    if (this.quantidadeEstoque <= this.estoqueMinimo) {
      return true;
    }
    return false;
  }
}
