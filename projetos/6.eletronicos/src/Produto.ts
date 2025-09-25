import { CategoriaProduto } from './Enum';

// Classe abstrata Produto
export abstract class Produto {
  constructor(
    public id: string,
    public nome: string,
    public marca: string,
    public preco: number,
    public quantidadeEstoque: number,
    public categoria: CategoriaProduto,
    public peso: number,
    public garantiaMeses: number,
  ) {}

  // Cada produto calcula frete de forma diferente
  abstract calcularFrete(cep: string): number;

  // Verifica se tem estoque suficiente
  temEstoque(quantidade: number): boolean {
    return this.quantidadeEstoque >= quantidade;
  }

  // Atualiza quantidade em estoque
  atualizarEstoque(quantidade: number): void {
    this.quantidadeEstoque = Math.max(0, this.quantidadeEstoque + quantidade);
  }

  // Aplica desconto no preço
  aplicarDesconto(percentual: number): number {
    percentual = Math.min(percentual, 100);
    return this.preco - (this.preco * percentual) / 100;
  }
}
