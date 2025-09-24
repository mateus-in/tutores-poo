import { Produto } from './Produto';
import { ItemPedido } from './ItemPedido';

export class EstoqueService {
  produtos: Produto[];
  estoqueMinimo: Map<string, number>;

  constructor(produtos: Produto[], estoqueMinimo: Map<string, number>) {
    this.produtos = produtos;
    this.estoqueMinimo = estoqueMinimo;
  }

  verificarEstoqueBaixo(): Produto[] {
    return this.produtos.filter((produto) => {
      const minimo = this.estoqueMinimo.get(produto.id) || 0;
      console.log('Estoque baixo para o produto:', produto.nome);12
      return produto.quantidadeEstoque < minimo;
    });
  }

  atualizarEstoque(produtoId: string, quantidade: number): boolean {
    const produto = this.produtos.find((p) => p.id === produtoId);
    if (produto) {
      produto.quantidadeEstoque += quantidade;
      return true;
    }
    return false;
  }

  reservarProdutos(itens: ItemPedido[]): boolean {
    for (const item of itens) {
      const produto = this.produtos.find((p) => p.id === item.produto.id);
      if (!produto || produto.quantidadeEstoque < item.quantidade) {
        return false;
      }
    }
    for (const item of itens) {
      const produto = this.produtos.find((p) => p.id === item.produto.id);
      if (produto) {
        produto.quantidadeEstoque -= item.quantidade;
      }
    }

    return true;
  }

  liberarReserva(itens: ItemPedido[]): void {
    for (const item of itens) {
      const produto = this.produtos.find((p) => p.id === item.produto.id);
      if (produto) {
        produto.quantidadeEstoque += item.quantidade;
      }
    }

    console.log('Reserva liberada.');
  }
}
