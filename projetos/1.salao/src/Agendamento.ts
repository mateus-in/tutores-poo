import { Cliente } from './Cliente';
import { MetodoPagamento } from './MetodoPagamento';
import { Profissional } from './Profissional';
import { Servico } from './Servico';
import { StatusPagamento } from './StatusPagamento';

export class Agendamento {
  constructor(
    public id: string,
    public cliente: Cliente,
    public profissional: Profissional,
    public servicos: Servico[],
    public dataHora: Date,
    public status: StatusPagamento,
    public pagamento: MetodoPagamento,
  ) {}

  calcularDuracaoTotal(): number {
    if (this.servicos.length === 0) {
      return 0;
    }
    return this.servicos.reduce((total, servico) => total + servico.duracaoMinutos, 0);
  }

  calcularValorTotal(): number {
    if (this.servicos.length === 0) {
      return 0;
    }
    return this.servicos.reduce((total, servico) => total + servico.calcularPrecoFinal(), 0);
  }

  adicionarServico(servico: Servico): void {
    if (this.servicos.includes(servico)) {
      throw new Error('Este serviço já foi adicionado ao agendamento.');
    }
    this.servicos.push(servico);
  }
  somarDuracaoServicos(): number {
    return this.servicos.reduce((total, servico) => total + servico.duracaoMinutos, 0);
  }
  DuracaoAgendamento(): Date {
    return new Date(this.dataHora.getTime() + this.somarDuracaoServicos() * 60000);
  }
}
