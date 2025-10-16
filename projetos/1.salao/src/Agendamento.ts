import { Cliente } from './Cliente';
import { Profissional } from './Profissional';
import { Servico } from './Servico';
import { StatusAgendamento } from './StatusAgendamento';
import { Pagamento } from './Pagamento';

export class Agendamento {
  constructor(
    public id: string,
    public cliente: Cliente,
    public profissional: Profissional,
    public servicos: Servico[],
    public dataHora: Date,
    public status: StatusAgendamento,
    public pagamento: Pagamento,
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
}
