import { Produto } from './Produto';
import { ItemPedido } from './ItemPedido';

// Gerencia operações de estoque
export class EstoqueService {
  constructor(public produtos: Produto[], public estoqueMinimo: Map<string, number>) {}

  // Retorna produtos com estoque abaixo do mínimo
  verificarEstoqueBaixo(): Produto[] {
    return this.produtos.filter((produto) => {
      const minimo = this.estoqueMinimo.get(produto.id) || 0;
      return produto.quantidadeEstoque < minimo;
    });
  }

  // Atualiza quantidade em estoque
  atualizarEstoque(produtoId: string, quantidade: number): boolean {
    const produto = this.produtos.find((p) => p.id === produtoId);
    if (produto) {
      produto.quantidadeEstoque += quantidade;
      return true;
    }
    return false;
  }

  // Reserva produtos para pedido
  reservarProdutos(itens: ItemPedido[]): boolean {
    for (const item of itens) {
      const produto = this.produtos.find((p) => p.id === item.produto.id);
      if (!produto || produto.quantidadeEstoque < item.quantidade) return false;
    }
    for (const item of itens) {
      const produto = this.produtos.find((p) => p.id === item.produto.id);
      if (produto) produto.quantidadeEstoque -= item.quantidade;
    }
    return true;
  }

  // Libera produtos reservados
  liberarReserva(itens: ItemPedido[]): void {
    for (const item of itens) {
      const produto = this.produtos.find((p) => p.id === item.produto.id);
      if (produto) produto.quantidadeEstoque += item.quantidade;
    }
  }
}
