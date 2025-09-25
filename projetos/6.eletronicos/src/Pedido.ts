import { Cliente } from './Cliente';
import { ItemPedido } from './ItemPedido';
import { StatusPedido, FormaPagamento } from './Enum';

// Classe que representa um pedido na loja

export class Pedido {
  id: string; // ID do pedido
  cliente: Cliente; // Cliente que realizou o pedido
  itens: ItemPedido[]; // Lista de itens do pedido
  dataPedido: Date; // Data do pedido
  status: StatusPedido; // Status atual do pedido
  valorTotal: number; // Valor total do pedido
  valorFrete: number; // Valor do frete
  formaPagamento: FormaPagamento; // Forma de pagamento

  constructor(
    id: string,
    cliente: Cliente,
    itens: ItemPedido[],
    dataPedido: Date,
    status: StatusPedido,
    valorTotal: number,
    valorFrete: number,
    formaPagamento: FormaPagamento,
  ) {
    this.id = id;
    this.cliente = cliente;
    this.itens = itens;
    this.dataPedido = dataPedido;
    this.status = status;
    this.valorTotal = valorTotal;
    this.valorFrete = valorFrete;
    this.formaPagamento = formaPagamento;
  }

  // Adiciona um item ao pedido

  adicionarItem(item: ItemPedido): void {
    this.itens.push(item);
    console.log('Item adicionado!');
  }

  // Remove um item do pedido pelo ID do produto

  removerItem(produtoId: string): boolean {
    const i = this.itens.findIndex((i) => i.produto.id === produtoId);
    if (i !== -1) {
      this.itens.splice(i, 1);
      console.log('Item removido');
      return true;
    }
    console.log('Item não encontrado!');
    return false;
  }

  // Calcula o subtotal do pedido considerando quantidade e desconto

  calcularSubtotal(): number {
    return this.itens.reduce((total, item) => {
      const valorItem = item.precoUnitario * item.quantidade - item.desconto;
      return total + valorItem;
    }, 0);
  }

  // Calcula o valor total do pedido somando o frete

  calcularValorTotal(): number {
    return this.calcularSubtotal() + this.valorFrete;
  }

  // Confirma o pedido, atualiza status e valor total

  confirmarPedido(): boolean {
    if (this.itens.length === 0) {
      console.log('Pedido sem itens!');
      return false;
    }

    this.valorTotal = this.calcularValorTotal();
    this.status = StatusPedido.CONFIRMADO;
    console.log('Pedido confirmado!');
    return true;
  }
}
