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

  calcularDuracaoTotal(): number{
    return this.servicos.reduce((total, servico) => total + servico.duracaoMinutos, 0);
  }
}
