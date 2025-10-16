import { Pedido } from './Pedido';
import { Produto } from './Produto';

export class RelatorioVendas {
  dataInicio: Date;
  dataFim: Date;
  pedidosAnalisados: Pedido[];

  constructor(dataInicio: Date, dataFim: Date, pedidosAnalisados: Pedido[]) {
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
    this.pedidosAnalisados = pedidosAnalisados;
  }

  calcularFaturamentoTotal(): number {
    return this.pedidosAnalisados.reduce((total, pedido) => total + pedido.valorTotal, 0);
  }

  obterProdutosMaisVendidos(): Produto[] {
    const contagem: Map<string, { produto: Produto; quantidade: number }> = new Map();

    this.pedidosAnalisados.forEach((pedido) => {
      pedido.itens.forEach((item) => {
        if (contagem.has(item.produto.id)) {
          contagem.get(item.produto.id)!.quantidade += item.quantidade;
        } else {
          contagem.set(item.produto.id, { produto: item.produto, quantidade: item.quantidade });
        }
      });
    });

    return Array.from(contagem.values())
      .sort((a, b) => b.quantidade - a.quantidade)
      .map((v) => v.produto);
  }

  calcularTicketMedio(): number {
    if (this.pedidosAnalisados.length === 0) return 0;
    return this.calcularFaturamentoTotal() / this.pedidosAnalisados.length;
  }

  analisarPerformanceVendedores(): { vendedor: string; totalVendas: number }[] {
    return this.pedidosAnalisados.map((pedido) => ({
      vendedor: pedido.cliente.nome,
      totalVendas: pedido.valorTotal,
    }));
  }
}
