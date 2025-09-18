// Interfaces base
interface Endereco {
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  cep: string;
  estado: string;
}

interface Cliente {
  id: string;
  nome: string;
  cpfCnpj: string;
  tipo: 'Pessoa Física' | 'Pessoa Jurídica';
  email: string;
  telefone: string;
  endereco: Endereco;
  dataCadastro: Date;
  status: 'Ativo' | 'Inativo' | 'Suspenso';
}

interface Condutor {
  id: string;
  nome: string;
  cnh: string;
  validadeCnh: Date;
  telefone: string;
  status: 'Disponível' | 'Ocupado' | 'Inativo';
}

// Enum para tipos de serviços
enum TipoServico {
  LOGISTICO = 'Logístico',
  TRANSPORTE_PUBLICO = 'Transporte Público',
  TRANSPORTE_EXECUTIVO = 'Transporte Executivo',
  MUDANCA = 'Mudança',
  ENTREGA_EXPRESSA = 'Entrega Expressa',
}

interface ServicoBase {
  id: string;
  tipo: TipoServico;
  descricao: string;
  precoPorHora: number;
  precoPorKm: number;
  precoFixo?: number;
  veiculoNecessario: string; // Tipo de veículo necessário
}

interface Servico extends ServicoBase {
  disponivel: boolean;
  restricoes?: string[];
}

interface Contrato {
  id: string;
  clienteId: string;
  servicoId: string;
  condutorId?: string;
  veiculoId?: string;
  dataInicio: Date;
  dataFim: Date;
  origem: Endereco;
  destino?: Endereco;
  observacoes?: string;
  status: 'Solicitado' | 'Aprovado' | 'Em Andamento' | 'Concluído' | 'Cancelado';
  valorTotal: number;
  formaPagamento: 'Dinheiro' | 'Cartão' | 'PIX' | 'Boleto';
  dataContratacao: Date;
}

interface Avaliacao {
  id: string;
  contratoId: string;
  clienteId: string;
  nota: number; // 1 a 5
  comentario?: string;
  data: Date;
}

interface Pagamento {
  id: string;
  contratoId: string;
  valor: number;
  dataPagamento: Date;
  formaPagamento: string;
  status: 'Pendente' | 'Pago' | 'Cancelado' | 'Estornado';
}

// Importando a classe Frota do código anterior
interface Manutencao {
  id: string;
  tipo: 'Preventiva' | 'Corretiva';
  descricao: string;
  data: Date;
  status: 'Pendente' | 'Concluída';
}

interface HistoricoEntradaSaida {
  entrada: Date;
  saida: Date | null;
}

interface Veiculo {
  id: string;
  placa: string;
  modelo: string;
  ano: number;
  cor: string;
  quilometragem: number;
  tipoCombustivel: 'Gasolina' | 'Álcool' | 'Diesel' | 'Elétrico' | 'Híbrido';
  capacidadeTanque: number;
  status: 'Disponível' | 'Em manutenção' | 'Alugado';
  manutencoes: Manutencao[];
  historicoEntradaSaidas: HistoricoEntradaSaida[];
  categoria: 'Van' | 'Caminhão' | 'Ônibus' | 'Carro' | 'Moto';
  capacidadePassageiros?: number;
  capacidadeCarga?: number; // em kg
}

export class Servicos {
  private clientes: Cliente[] = [];
  private servicos: Servico[] = [];
  private condutores: Condutor[] = [];
  private contratos: Contrato[] = [];
  private avaliacoes: Avaliacao[] = [];
  private pagamentos: Pagamento[] = [];
  private veiculos: Veiculo[] = [];

  // Métodos para gerenciar clientes
  cadastrarCliente(cliente: Cliente): void {
    const clienteExistente = this.clientes.find((c) => c.cpfCnpj === cliente.cpfCnpj);
    if (clienteExistente) {
      console.log(`Cliente com CPF/CNPJ ${cliente.cpfCnpj} já está cadastrado.`);
      return;
    }

    this.clientes.push(cliente);
    console.log(`Cliente ${cliente.nome} cadastrado com sucesso.`);
  }

  // Métodos para gerenciar serviços
  adicionarServico(servico: Servico): void {
    this.servicos.push(servico);
    console.log(`Serviço ${servico.descricao} adicionado com sucesso.`);
  }

  listarServicosDisponiveis(): Servico[] {
    return this.servicos.filter((servico) => servico.disponivel);
  }

  // Métodos para gerenciar condutores
  cadastrarCondutor(condutor: Condutor): void {
    // Verifica se a CNH não está vencida
    if (condutor.validadeCnh < new Date()) {
      console.log(`CNH do condutor ${condutor.nome} está vencida.`);
      return;
    }

    this.condutores.push(condutor);
    console.log(`Condutor ${condutor.nome} cadastrado com sucesso.`);
  }

  listarCondutoresDisponiveis(): Condutor[] {
    return this.condutores.filter(
      (condutor) => condutor.status === 'Disponível' && condutor.validadeCnh > new Date(),
    );
  }

  // Métodos para gerenciar veículos
  adicionarVeiculo(veiculo: Veiculo): void {
    this.veiculos.push(veiculo);
    console.log(`Veículo ${veiculo.placa} adicionado à frota.`);
  }

  listarVeiculosDisponiveis(categoria?: string): Veiculo[] {
    return this.veiculos.filter((veiculo) => {
      const statusOk = veiculo.status === 'Disponível';
      const categoriaOk = !categoria || veiculo.categoria === categoria;
      return statusOk && categoriaOk;
    });
  }

  // Métodos para gerenciar contratos
  solicitarServico(
    clienteId: string,
    servicoId: string,
    dataInicio: Date,
    dataFim: Date,
    origem: Endereco,
    destino?: Endereco,
    observacoes?: string,
  ): string | null {
    const cliente = this.clientes.find((c) => c.id === clienteId);
    if (!cliente || cliente.status !== 'Ativo') {
      console.log('Cliente não encontrado ou inativo.');
      return null;
    }

    const servico = this.servicos.find((s) => s.id === servicoId);
    if (!servico || !servico.disponivel) {
      console.log('Serviço não encontrado ou indisponível.');
      return null;
    }

    const contratoId = `CONT${Date.now()}`;
    const valorTotal = this.calcularValorServico(servico, dataInicio, dataFim);

    const novoContrato: Contrato = {
      id: contratoId,
      clienteId,
      servicoId,
      dataInicio,
      dataFim,
      origem,
      destino,
      observacoes,
      status: 'Solicitado',
      valorTotal,
      formaPagamento: 'PIX', // Padrão
      dataContratacao: new Date(),
    };

    this.contratos.push(novoContrato);
    console.log(
      `Contrato ${contratoId} solicitado com sucesso. Valor: R$ ${valorTotal.toFixed(2)}`,
    );
    return contratoId;
  }

  private calcularValorServico(servico: Servico, inicio: Date, fim: Date): number {
    const horas = (fim.getTime() - inicio.getTime()) / (1000 * 60 * 60);

    if (servico.precoFixo) {
      return servico.precoFixo;
    }

    return horas * servico.precoPorHora;
  }

  aprovarContrato(contratoId: string): void {
    const contrato = this.contratos.find((c) => c.id === contratoId);
    if (!contrato) {
      console.log('Contrato não encontrado.');
      return;
    }

    if (contrato.status !== 'Solicitado') {
      console.log('Contrato não está em status de solicitação.');
      return;
    }

    // Alocar condutor e veículo
    const servico = this.servicos.find((s) => s.id === contrato.servicoId);
    if (servico) {
      const condutorDisponivel = this.listarCondutoresDisponiveis()[0];
      const veiculoDisponivel = this.listarVeiculosDisponiveis()[0];

      if (condutorDisponivel) {
        contrato.condutorId = condutorDisponivel.id;
        condutorDisponivel.status = 'Ocupado';
      }

      if (veiculoDisponivel) {
        contrato.veiculoId = veiculoDisponivel.id;
        veiculoDisponivel.status = 'Alugado';
      }
    }

    contrato.status = 'Aprovado';
    console.log(`Contrato ${contratoId} aprovado.`);
  }

  iniciarServico(contratoId: string): void {
    const contrato = this.contratos.find((c) => c.id === contratoId);
    if (!contrato) {
      console.log('Contrato não encontrado.');
      return;
    }

    if (contrato.status !== 'Aprovado') {
      console.log('Contrato precisa estar aprovado para iniciar o serviço.');
      return;
    }

    contrato.status = 'Em Andamento';
    console.log(`Serviço do contrato ${contratoId} iniciado.`);
  }

  concluirServico(contratoId: string): void {
    const contrato = this.contratos.find((c) => c.id === contratoId);
    if (!contrato) {
      console.log('Contrato não encontrado.');
      return;
    }

    if (contrato.status !== 'Em Andamento') {
      console.log('Serviço precisa estar em andamento para ser concluído.');
      return;
    }

    // Liberar recursos
    if (contrato.condutorId) {
      const condutor = this.condutores.find((c) => c.id === contrato.condutorId);
      if (condutor) {
        condutor.status = 'Disponível';
      }
    }

    if (contrato.veiculoId) {
      const veiculo = this.veiculos.find((v) => v.id === contrato.veiculoId);
      if (veiculo) {
        veiculo.status = 'Disponível';
      }
    }

    contrato.status = 'Concluído';
    console.log(`Serviço do contrato ${contratoId} concluído.`);
  }

  cancelarContrato(contratoId: string, motivo?: string): void {
    const contrato = this.contratos.find((c) => c.id === contratoId);
    if (!contrato) {
      console.log('Contrato não encontrado.');
      return;
    }

    // Liberar recursos se estiverem alocados
    if (contrato.condutorId) {
      const condutor = this.condutores.find((c) => c.id === contrato.condutorId);
      if (condutor) {
        condutor.status = 'Disponível';
      }
    }

    if (contrato.veiculoId) {
      const veiculo = this.veiculos.find((v) => v.id === contrato.veiculoId);
      if (veiculo) {
        veiculo.status = 'Disponível';
      }
    }

    contrato.status = 'Cancelado';
    if (motivo) {
      contrato.observacoes = (contrato.observacoes || '') + `\nCancelado: ${motivo}`;
    }
    console.log(`Contrato ${contratoId} cancelado.`);
  }

  // Métodos para pagamento
  registrarPagamento(contratoId: string, formaPagamento: Pagamento['formaPagamento']): void {
    const contrato = this.contratos.find((c) => c.id === contratoId);
    if (!contrato) {
      console.log('Contrato não encontrado.');
      return;
    }

    const pagamento: Pagamento = {
      id: `PAG${Date.now()}`,
      contratoId,
      valor: contrato.valorTotal,
      dataPagamento: new Date(),
      formaPagamento,
      status: 'Pago',
    };

    this.pagamentos.push(pagamento);
    console.log(
      `Pagamento de R$ ${contrato.valorTotal.toFixed(2)} registrado para o contrato ${contratoId}.`,
    );
  }

  // Métodos para avaliação
  avaliarServico(clienteId: string, contratoId: string, nota: number, comentario?: string): void {
    const contrato = this.contratos.find((c) => c.id === contratoId && c.clienteId === clienteId);
    if (!contrato) {
      console.log('Contrato não encontrado ou não pertence ao cliente.');
      return;
    }

    if (contrato.status !== 'Concluído') {
      console.log('Só é possível avaliar serviços concluídos.');
      return;
    }

    if (nota < 1 || nota > 5) {
      console.log('Nota deve ser entre 1 e 5.');
      return;
    }

    const avaliacao: Avaliacao = {
      id: `AVL${Date.now()}`,
      contratoId,
      clienteId,
      nota,
      comentario,
      data: new Date(),
    };

    this.avaliacoes.push(avaliacao);
    console.log(`Avaliação registrada: ${nota} estrelas para o contrato ${contratoId}.`);
  }

  // Relatórios
  gerarRelatorioContratos(clienteId?: string): void {
    let contratos = this.contratos;

    if (clienteId) {
      contratos = contratos.filter((c) => c.clienteId === clienteId);
    }

    console.log(`\n=== RELATÓRIO DE CONTRATOS ===`);
    console.log(`Total de contratos: ${contratos.length}`);

    contratos.forEach((contrato) => {
      const cliente = this.clientes.find((c) => c.id === contrato.clienteId);
      const servico = this.servicos.find((s) => s.id === contrato.servicoId);

      console.log(`\nContrato: ${contrato.id}`);
      console.log(`Cliente: ${cliente?.nome || 'N/A'}`);
      console.log(`Serviço: ${servico?.descricao || 'N/A'}`);
      console.log(`Status: ${contrato.status}`);
      console.log(`Valor: R$ ${contrato.valorTotal.toFixed(2)}`);
      console.log(
        `Período: ${contrato.dataInicio.toLocaleDateString()} - ${contrato.dataFim.toLocaleDateString()}`,
      );
    });
  }

  obterMediaAvaliacoes(): number {
    if (this.avaliacoes.length === 0) return 0;

    const soma = this.avaliacoes.reduce((acc, avl) => acc + avl.nota, 0);
    return soma / this.avaliacoes.length;
  }

  listarContratosCliente(clienteId: string): Contrato[] {
    return this.contratos.filter((contrato) => contrato.clienteId === clienteId);
  }

  obterReceitaTotal(): number {
    return this.pagamentos
      .filter((pag) => pag.status === 'Pago')
      .reduce((total, pag) => total + pag.valor, 0);
  }
}

// Exemplo de uso do sistema
const sistema = new Servicos();

// Cadastrar serviços
const servicoLogistico: Servico = {
  id: 'SRV001',
  tipo: TipoServico.LOGISTICO,
  descricao: 'Transporte de cargas e mudanças',
  precoPorHora: 80,
  precoPorKm: 2.5,
  veiculoNecessario: 'Caminhão',
  disponivel: true,
};

const servicoTransportePublico: Servico = {
  id: 'SRV002',
  tipo: TipoServico.TRANSPORTE_PUBLICO,
  descricao: 'Transporte coletivo para eventos',
  precoPorHora: 120,
  precoPorKm: 3,
  veiculoNecessario: 'Ônibus',
  disponivel: true,
};

sistema.adicionarServico(servicoLogistico);
sistema.adicionarServico(servicoTransportePublico);

// Cadastrar cliente
const cliente: Cliente = {
  id: 'CLI001',
  nome: 'João Silva',
  cpfCnpj: '123.456.789-00',
  tipo: 'Pessoa Física',
  email: 'joao@email.com',
  telefone: '(11) 99999-9999',
  endereco: {
    rua: 'Rua das Flores',
    numero: '123',
    bairro: 'Centro',
    cidade: 'São Paulo',
    cep: '01000-000',
    estado: 'SP',
  },
  dataCadastro: new Date(),
  status: 'Ativo',
};

sistema.cadastrarCliente(cliente);

// Cadastrar condutor
const condutor: Condutor = {
  id: 'COND001',
  nome: 'Carlos Motorista',
  cnh: '12345678901',
  validadeCnh: new Date(2026, 11, 31),
  telefone: '(11) 88888-8888',
  status: 'Disponível',
};

sistema.cadastrarCondutor(condutor);

// Cadastrar veículo
const veiculo: Veiculo = {
  id: 'VEI001',
  placa: 'ABC-1234',
  modelo: 'Mercedes Sprinter',
  ano: 2023,
  cor: 'Branco',
  quilometragem: 25000,
  tipoCombustivel: 'Diesel',
  capacidadeTanque: 80,
  status: 'Disponível',
  manutencoes: [],
  historicoEntradaSaidas: [],
  categoria: 'Van',
  capacidadePassageiros: 15,
  capacidadeCarga: 2000,
};

sistema.adicionarVeiculo(veiculo);

// Solicitar e processar um serviço
const dataInicio = new Date(2025, 9, 20, 8, 0);
const dataFim = new Date(2025, 9, 20, 18, 0);

const contratoId = sistema.solicitarServico(
  'CLI001',
  'SRV001',
  dataInicio,
  dataFim,
  cliente.endereco,
  {
    rua: 'Rua Nova',
    numero: '456',
    bairro: 'Vila Nova',
    cidade: 'São Paulo',
    cep: '02000-000',
    estado: 'SP',
  },
  'Mudança residencial completa',
);

if (contratoId) {
  sistema.aprovarContrato(contratoId);
  sistema.iniciarServico(contratoId);
  sistema.registrarPagamento(contratoId, 'PIX');
  sistema.concluirServico(contratoId);
  sistema.avaliarServico('CLI001', contratoId, 5, 'Excelente serviço!');
}

// Gerar relatórios
sistema.gerarRelatorioContratos();
console.log(`\nMédia de avaliações: ${sistema.obterMediaAvaliacoes().toFixed(1)} estrelas`);
console.log(`Receita total: R$ ${sistema.obterReceitaTotal().toFixed(2)}`);
