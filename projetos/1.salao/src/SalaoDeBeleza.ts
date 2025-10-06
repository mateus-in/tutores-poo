import { Cliente } from './Cliente';
import { Profissional } from './Profissional';
import { Agendamento } from './Agendamento';
import { Produto } from './Produto';
import { HorarioFuncionamento } from './HorarioFuncionamento';
import { MetodoPagamento } from './MetodoPagamento';
import { StatusPagamento } from './StatusPagamento';
import { Servico } from './Servico';
import { Promocao } from './Promocao';

export class SalaoDeBeleza {
  constructor(
    private nome: string,
    private clientes: Cliente[],
    private profissionais: Profissional[],
    private agendamentos: Agendamento[],
    private produtos: Produto[],
    private horariosFuncionamento: HorarioFuncionamento[],
    private servicos: Servico[],
    private promocoes: Promocao[],
  ) {}

  cadastrarProfissional(profissional: Profissional): void {
    if (this.profissionais.find((Profissional) => Profissional.cpf === profissional.cpf)) {
      throw new Error('Profissional com este CPF já existe.');
    }
    this.profissionais.push(profissional);
  }

  cadastrarCliente(cliente: Cliente): void {
    if (this.clientes.find((Cliente) => Cliente.cpf === cliente.cpf)) {
      throw new Error('Cliente com este CPF já existe.');
    }
    this.clientes.push(cliente);
  }

  atualizarCliente(id: string, novosDados: Partial<Cliente>): void { 
    const cliente = this.clientes.find((Cliente) => Cliente.id === id);
    if (!cliente) {
      throw new Error('Cliente não encontrado.');
    }
    Object.assign(cliente, novosDados);
  }

  cadastrarProduto(produto: Produto): void {
    if (this.produtos.find((Produto) => Produto.nome === produto.nome)) {
      throw new Error('Produto com este nome já existe.');
    }
  }  

  cadastrarServico(servico: Servico): void {
    if (this.servicos.find((Servico) => Servico.nome === servico.nome)) {
      throw new Error('Serviço com este nome já existe.');
    }
      this.servicos.push(servico);
  }

  criarPromocao(promocao: Promocao): void {
    if (this.promocoes.find((Promocao) => Promocao.nome === promocao.nome)) {
      throw new Error('Promoção com este nome já existe.');
    }
      this.promocoes.push(promocao);
  }

  agendarServico(agendamento: Agendamento, cliente: Cliente, profissional: Profissional, produtos: Produto): boolean {
    if (!this.profissionais.find((Profissional) => Profissional.id === profissional.id)) {
      throw new Error('Profissional não cadastrado.');
    }
    if ((!profissional.temEspecialidades(agendamento.servicos[0])) || (!profissional.estaDisponivel(agendamento.dataHora, agendamento.calcularDuracaoTotal()))) {//agendamento.servicos[0].nome apresentou erro no teste
      throw new Error('Conflito de horários ou profissional sem especialidade');
    }
    if (!produtos.temEstoqueSuficiente(produtos.quantidadeEstoque)) {
      throw new Error('Estoque insuficiente para realizar o serviço.');
    } 
    if (this.clientes.find((Cliente) => Cliente.id === cliente.id) === undefined) {
      throw new Error('Cliente não cadastrado.');
    }
    if (this.agendamentos.find((Agendamento) => Agendamento.id === agendamento.id)) {
      throw new Error('Ja existe um agendamento com este ID.');
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

  reagendarAgendamento(id: string, novaData: Date): boolean {
    const agendamento = this.agendamentos.find((Agendamento) => Agendamento.id === id);
    if (!agendamento) {
      throw new Error('Agendamento não encontrado.');
    }
    if (!agendamento.profissional.estaDisponivel(novaData, agendamento.calcularDuracaoTotal())) {
      throw new Error('Profissional indisponível na nova data.');
    }
    agendamento.dataHora = novaData;
    return true;
  }

  consultarAgenda(profissionalId: string, data: Date): Agendamento[] {
    return this.agendamentos.filter(
      (agendamento) =>
        agendamento.profissional.id === profissionalId &&
        agendamento.dataHora.toDateString() === data.toDateString()
    );
  }

  consultarHistoricoCliente(clienteId: string): Agendamento[] {
    return this.agendamentos.filter((agendamento) => agendamento.cliente.id === clienteId);
  }
}
