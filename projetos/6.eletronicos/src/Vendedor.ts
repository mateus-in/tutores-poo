import { Pedido } from './Pedido';

export class Vendedor {
  id: string;
  nome: string;
  comissaoPercentual: number;
  metaMensal: number;
  vendasMes: Pedido[];

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

  calcularComissao(): number {}

  adicionarVenda(pedido: Pedido): {};

  atingiuMeta(): boolean {}
}
