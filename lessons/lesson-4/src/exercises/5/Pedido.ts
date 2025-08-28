import { ItemPedido } from './ItemPedido';

export class Pedido {
  constructor(public numero: string, public data: Date, public itens: ItemPedido[]) {}

  calcularTotal() {
    return this.itens.reduce((total, item) => total + item.produto.preco * item.quantidade, 0);
  }
}
