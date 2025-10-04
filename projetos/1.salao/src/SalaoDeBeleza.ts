import { Cliente } from './Cliente';
import { Profissional } from './Profissional';
import { Agendamento } from './Agendamento';
import { Produto } from './Produto';
import { HorarioFuncionamento } from './HorarioFuncionamento';
import { MetodoPagamento } from './MetodoPagamento';
import { StatusPagamento } from './StatusPagamento';

export class SalaoDeBeleza {
  constructor(
    private nome: string,
    private clientes: Cliente[],
    private profissionais: Profissional[],
    public agendamentos: Agendamento[],
    private produtos: Produto[],
    private horariosFuncionamento: HorarioFuncionamento[],
  ) {}

  cadastrarCliente(cliente: Cliente): void {
    if (this.clientes.find((c) => c.id === cliente.id)) {
      throw new Error('Cliente com este ID já existe.');
    }
    this.clientes.push(cliente);
  }

  agendarServico(agendamento: Agendamento, cliente: Cliente, profissional: Profissional): boolean {
    if (!this.profissionais.some((p) => p.id === profissional.id)) {
      throw new Error('Profissional não cadastrado.');
    }
    if (!profissional.temEspecialidades(agendamento.servicos[0].nome)) {
      throw new Error('Profissional não possui a especialidade para este serviço.');
    }
    if (!this.clientes.some((c) => c.id === cliente.id)) {
      throw new Error('Cliente não cadastrado.');
    }
    if (this.agendamentos.some((Agendamento) => Agendamento.id === agendamento.id)) {
      throw new Error('Ja existe um agendamento com este ID.');
    }
    const novoComeco = agendamento.dataHora;
    const novoFim = agendamento.DuracaoAgendamento();
    const conflitos = this.agendamentos.some((a) => {
      a.profissional.id === profissional.id &&
        novoComeco < a.DuracaoAgendamento() &&
        novoFim > a.dataHora;
    });
    if (conflitos) {
      throw new Error('Conflito de horário com outro agendamento.');
    }
    this.agendamentos.push(agendamento);
    return true;
  }

  finalizarAtendimento(agendamento: Agendamento): void {
    if (!this.agendamentos.find((a) => a.id === a.id)) {
      throw new Error('Agendamento não encontrado.');
    }
    agendamento.status = StatusPagamento.APROVADO;
  }
  cancelarAgendamento(id: string): boolean {
    if (!this.agendamentos.find((a) => a.id === id)) {
      throw new Error('Agendamento não encontrado.');
    }
    this.agendamentos = this.agendamentos.filter((a) => a.id !== id);
    return true;
  }

  consultarDisponibilidade(profissional: Profissional, data: Date): boolean {
    if (this.horariosFuncionamento.length === 0) {
      throw new Error('Horários de funcionamento não definidos.');
    }
    if (!this.profissionais.find((Profissional) => Profissional.id === profissional.id)) {
      throw new Error('Profissional não encontrado.');
    }
    const agendamentosNoDia = this.agendamentos.filter(
      (Agendamento) =>
        Agendamento.profissional.id === profissional.id &&
        Agendamento.dataHora.toDateString() === data.toDateString(),
    );
    return agendamentosNoDia.length === 0;
  }
}
