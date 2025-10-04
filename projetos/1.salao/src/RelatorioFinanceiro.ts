import { Agendamento } from './Agendamento';
import { Cliente } from './Cliente';
import { Servico } from './Servico';

export class RelatorioFinanceiro {
  constructor(
    public dataInicio: Date,
    public dataFim: Date,
    public agendamentosFinalizados: Agendamento[],
  ) {}

  calcularFaturamentoTotal(): number {
    if (this.agendamentosFinalizados.length === 0) {
      return 0;
    }
    return this.agendamentosFinalizados.reduce(
      (total, agendamento) => total + agendamento.calcularValorTotal(),
      0,
    );
  }

  obterServicosMaisPopulares(): string[] {
    const servicoContagem: { [chave: string]: number } = {};
    this.agendamentosFinalizados.forEach((agendamento) => {
      agendamento.servicos.forEach((servico) => {
        if (servicoContagem[servico.nome]) {
          return servicoContagem[servico.nome]++;
        } else {
          servicoContagem[servico.nome] = 1;
        }
      });
    });
    const servicosOrdenados = Object.entries(servicoContagem).sort((a, b) => b[1] - a[1]);
    return servicosOrdenados.slice(0, 10).map((entry) => entry[0]);
  }

  calcularTicketMedio(): number {
    if (this.agendamentosFinalizados.length > 0) {
      const faturamentoTotal = this.calcularFaturamentoTotal();
      return faturamentoTotal / this.agendamentosFinalizados.length;
    }
    return 0;
  }

  listarClientesFrequentes(): Cliente[] {
    const clienteContagem: { [id: string]: { cliente: Cliente; contagem: number } } = {};
    this.agendamentosFinalizados.forEach((agendamento) => {
      const clienteId = agendamento.cliente.id;
      if (clienteContagem[clienteId]) {
        clienteContagem[clienteId].contagem++;
      } else {
        clienteContagem[clienteId] = { cliente: agendamento.cliente, contagem: 1 };
      }
    });
    const clientesOrdenados = Object.values(clienteContagem).sort(
      (a, b) => b.contagem - a.contagem,
    );
    if (clientesOrdenados.length > 0) {
      return clientesOrdenados.slice(0, 10).map((entry) => entry.cliente);
    }
    return [];
  }
}
