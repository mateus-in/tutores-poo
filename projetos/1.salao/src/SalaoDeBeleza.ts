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
    private agendamentos: Agendamento[],
    private produtos: Produto[],
    private horariosFuncionamento: HorarioFuncionamento[],
  ) {}

  cadastrarCliente(cliente: Cliente): void {
    if (this.clientes.find((Cliente) => Cliente.id === cliente.id)) {
      throw new Error('Cliente com este ID já existe.');
    }
    this.clientes.push(cliente);
  }

  agendarServico(agendamento: Agendamento, cliente: Cliente, profissional: Profissional): boolean {
    if (!this.profissionais.find((Profissional) => Profissional.id === profissional.id)) {
      throw new Error('Profissional não cadastrado.');
    }
    if (!profissional.temEspecialidades(agendamento.servicos[0].nome)) {
      throw new Error('Profissional não possui a especialidade para este serviço.');
    }
    if (this.clientes.find((Cliente) => Cliente.id === cliente.id) === undefined) {
      throw new Error('Cliente não cadastrado.');
    }
    if (this.agendamentos.find((Agendamento) => Agendamento.id === agendamento.id)) {
      throw new Error('Ja existe um agendamento com este ID.');
    }
    const existeAgendamentoMesmoHorario = this.agendamentos.some(
      (Agendamento) =>
        Agendamento.profissional.id === agendamento.profissional.id &&
        Agendamento.dataHora.getTime() === agendamento.dataHora.getTime(),
    );
    if (existeAgendamentoMesmoHorario) {
      throw new Error('Já existe um Agendamento para esse horário.');
    }
    this.agendamentos.push(agendamento);
    return true;
  }

  finalizarAtendimento(agendamento: Agendamento): void {
    if (!this.agendamentos.find((Agendamento) => Agendamento.id === agendamento.id)) {
      throw new Error('Agendamento não encontrado.');
    }
    agendamento.status = StatusPagamento.APROVADO;
  }
  cancelarAgendamento(id: string): boolean {
    if (!this.agendamentos.find((Agendamento) => Agendamento.id === id)) {
      throw new Error('Agendamento não encontrado.');
    }
    this.agendamentos = this.agendamentos.filter((Agendamento) => Agendamento.id !== id);
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
