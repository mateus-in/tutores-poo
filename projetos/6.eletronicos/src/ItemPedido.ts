import { Produto } from './Produto';

export class ItemPedido {
  public produto: Produto;
  public quantidade: number;
  public precoUnitario: number;
  public desconto: number;

  constructor(produto: Produto, quantidade: number, precoUnitario: number, desconto: number) {
    this.produto = produto;
    this.quantidade = quantidade;
    this.precoUnitario = precoUnitario;
    this.desconto = desconto;
  }

  calcularSubtotal(): number {
    const ItemPedido_subtotal = this.precoUnitario * this.quantidade;
    return ItemPedido_subtotal;
  }

  aplicarDesconto(percentual: number): void {
    if (percentual > 0 && percentual <= 100) {
      this.desconto = (this.precoUnitario * percentual) / 100;
    }
  }
}
