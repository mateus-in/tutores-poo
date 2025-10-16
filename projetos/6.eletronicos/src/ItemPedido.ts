import { Produto } from './Produto';

export class ItemPedido {
  constructor(
    public produto: Produto,
    public quantidade: number,
    public precoUnitario: number,
    public desconto: number,
  ) {}

  calcularSubtotal(): number {
    return this.precoUnitario * this.quantidade;
  }

  aplicarDesconto(percentual: number): void {
    if (percentual > 0 && percentual <= 100) {
      this.desconto = (this.precoUnitario * percentual) / 100;
    }
  }
}
