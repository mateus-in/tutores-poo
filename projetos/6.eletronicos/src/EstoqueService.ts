import { Produto } from './Produto';
import { ItemPedido } from './ItemPedido';
import { EstoqueInsuficienteException } from './EstoqueInsuficienteExpection';

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
        throw new EstoqueInsuficienteException(
          'Estoque insuficiente para o produto ${item.produto.nome}.',
        );
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
