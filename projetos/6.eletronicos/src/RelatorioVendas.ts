import { Pedido } from './Pedido';
import { Produto } from './Produto';

// Classe para gerar relatórios de vendas

export class RelatorioVendas {
  dataInicio: Date; // Data inicial do relatório
  dataFim: Date; // Data final do relatório
  pedidosAnalisados: Pedido[]; // Lista de pedidos analisados

  constructor(dataInicio: Date, dataFim: Date, pedidosAnalisados: Pedido[]) {
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
    this.pedidosAnalisados = pedidosAnalisados;
  }

  // Calcula o faturamento total do período

  calcularFaturamentoTotal(): number {
    return this.pedidosAnalisados.reduce((total, pedido) => total + pedido.valorTotal, 0);
  }

  // Retorna os produtos mais vendidos

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

    // Ordena por quantidade vendida e retorna produtos
    return Array.from(contagem.values())
      .sort((a, b) => b.quantidade - a.quantidade)
      .map((v) => v.produto);
  }

  // Calcula ticket médio por pedido

  calcularTicketMedio(): number {
    if (this.pedidosAnalisados.length === 0) return 0;
    return this.calcularFaturamentoTotal() / this.pedidosAnalisados.length;
  }

  // Analisar performance de vendedores (retorna objeto simples)

  analisarPerformanceVendedores(): { vendedor: string; totalVendas: number }[] {
    return this.pedidosAnalisados.map((pedido) => ({
      vendedor: pedido.cliente.nome,
      totalVendas: pedido.valorTotal,
    }));
  }
}
