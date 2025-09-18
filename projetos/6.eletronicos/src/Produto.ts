import { CategoriaProduto } from "./Enum";

export abstract class Produto {
  constructor(
    public id: string,
    public nome: string,
    public marca: string,
    public preco: number,
    public quantidadeEstoque: number,
    public categoria: CategoriaProduto,
    public peso: number,
    public garantiaMeses: number
  ) {}

  abstract calcularFrete(cep: string): number;

  temEstoque(quantidade: number): boolean {
    return this.quantidadeEstoque >= quantidade;
  }

  atualizarEstoque(quantidade: number): void {
    this.quantidadeEstoque += quantidade;
  }

  aplicarDesconto(percentual: number): number {
    return this.preco - (this.preco * percentual / 100);
  }
}
