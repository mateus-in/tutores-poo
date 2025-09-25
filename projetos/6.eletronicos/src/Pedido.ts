import { Cliente } from './Cliente';
import { ItemPedido } from './ItemPedido';
import { StatusPedido, FormaPagamento } from './Enum';
import { Produto } from './Produto';

export class Pedido {
  id: string;
  cliente: Cliente;
  itens: ItemPedido[];
  datapedido: Date;
  Status: StatusPedido;
  valorTotal: number;
  valorFrete: number;
  formaPagamento: FormaPagamento;

  constructor(
    id: string,
    cliente: Cliente,
    itens: ItemPedido[],
    datapedido: Date,
    Status: StatusPedido,
    valorTotal: number,
    valorFrete: number,
    formaPagamento: FormaPagamento,
  ) {
    this.id = id;
    this.cliente = cliente;
    this.itens = itens;
    this.datapedido = datapedido;
    this.Status = Status;
    this.valorTotal = valorTotal;
    this.valorFrete = valorFrete;
    this.formaPagamento = formaPagamento;
  }

  adicionarItem(item: ItemPedido): void {
    this.itens.push(item); // adiciona o pedido
    console.log('Item adicionado!');
  }

  removerItem(produtoId: string): boolean {
    const i = this.itens.findIndex((i) => i.produto.id === produtoId);

    if (i !== -1) {
      this.itens.splice(i, 1); // remove 1 item no índice encontrado
      console.log('Item removido');
      return true; // conseguiu remover
    }

    console.log('Item não encontrado!');
    return false; // não achou
  }

  calcularSubtotal(): number {
    return this.itens.reduce((total, item) => {
      const valorItem = item.precoUnitario * item.quantidade - item.desconto;
      return total + valorItem;
    }, 0);
  }

  calcularValorTotal(): number {
    return this.calcularSubtotal() + this.valorFrete;
  }

  confirmarPedido(): boolean {
    if (this.itens.length === 0) {
      console.log('Pedido sem itens!');
      return false;
    }

    this.valorTotal = this.calcularValorTotal();
    this.Status = StatusPedido.CONFIRMADO;
    console.log('Pedido confirmado!');
    return true;
  }
}
