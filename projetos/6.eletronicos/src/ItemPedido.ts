import { Produto } from './Produto';

// Representa um item de um pedido
export class ItemPedido {
  constructor(
    public produto: Produto,
    public quantidade: number,
    public precoUnitario: number,
    public desconto: number,
  ) {}

  // Calcula subtotal (preço * quantidade)
  calcularSubtotal(): number {
    return this.precoUnitario * this.quantidade;
  }

  // Aplica desconto em percentual
  aplicarDesconto(percentual: number): void {
    if (percentual > 0 && percentual <= 100) {
      this.desconto = (this.precoUnitario * percentual) / 100;
    }
  }
}
