import { Pedido } from './Pedido';

export class Vendedor {
  id: string;
  nome: string;
  comissaoPercentual: number;
  metaMensal: number;
  vendasMes: Pedido[] = [];

  constructor(
    id: string,
    nome: string,
    comissaoPercentual: number,
    metaMensal: number,
    vendasMes: Pedido[],
  ) {
    this.id = id;
    this.nome = nome;
    this.comissaoPercentual = comissaoPercentual;
    this.metaMensal = metaMensal;
    this.vendasMes = vendasMes;
  }

  calcularComissao(): number {
    const faturamento = this.vendasMes.reduce((acc, p) => acc + p.valorTotal, 0);
    return Number((faturamento * (this.comissaoPercentual / 100)).toFixed(2));
  }

  adicionarVenda(pedido: Pedido): void {
    this.vendasMes.push(pedido);
  }

  atingiuMeta(): boolean {
    const faturamento = this.vendasMes.reduce((acc, p) => acc + p.valorTotal, 0);
    return faturamento >= this.metaMensal;
  }
}
