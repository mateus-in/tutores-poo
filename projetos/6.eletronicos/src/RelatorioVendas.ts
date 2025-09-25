import { Pedido } from './Pedido';
import { Produto } from './Produto';

export class RelatorioVendas {
  DataInicio: Date;
  DataFim: Date;
  pedidosAnalisados: Pedido[];

  constructor(DataInicio: Date, DataFim: Date, pedidosAnalisados: Pedido[]) {
    this.DataInicio = DataInicio;
    this.DataFim = DataFim;
    this.pedidosAnalisados = pedidosAnalisados;
  }

  calcularFaturamentoTotal(): number {}

  obterProdutosMaisVendidos(): Produto[] {}

  calcularTicketMedio(): number {}

  analisarPerformanceVendedores(): PerformanceVendedor[] {}
}
