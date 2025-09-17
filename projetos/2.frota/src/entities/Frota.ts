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
}

export class Frota {
  private veiculos: Veiculo[] = [];

  adicionarVeiculo(veiculo: Veiculo): void {
    // Verifica se já existe um veículo com o mesmo ID
    const veiculoExistente = this.veiculos.find((v) => v.id === veiculo.id);
    if (veiculoExistente) {
      console.log(`Veículo com ID ${veiculo.id} já existe na frota.`);
      return;
    }

    this.veiculos.push(veiculo);
    console.log(`Veículo ${veiculo.placa} adicionado à frota.`);
  }

  cadastrarVeiculo(veiculo: Veiculo): void {
    // Inicializa arrays se não existirem
    if (!veiculo.manutencoes) {
      veiculo.manutencoes = [];
    }
    if (!veiculo.historicoEntradaSaidas) {
      veiculo.historicoEntradaSaidas = [];
    }

    this.adicionarVeiculo(veiculo);
  }

  registrarEntrada(idVeiculo: string): void {
    const veiculo = this.veiculos.find((v) => v.id === idVeiculo);
    if (!veiculo) {
      console.log(`Veículo com ID ${idVeiculo} não encontrado.`);
      return;
    }

    // Verifica se já existe uma entrada sem saída
    const entradaAberta = veiculo.historicoEntradaSaidas.find((h) => h.saida === null);
    if (entradaAberta) {
      console.log(`Veículo ${veiculo.placa} já possui uma entrada registrada sem saída.`);
      return;
    }

    veiculo.historicoEntradaSaidas.push({ entrada: new Date(), saida: null });
    console.log(`Entrada registrada para o veículo ${veiculo.placa}.`);
  }

  registrarSaida(idVeiculo: string): void {
    const veiculo = this.veiculos.find((v) => v.id === idVeiculo);
    if (!veiculo) {
      console.log(`Veículo com ID ${idVeiculo} não encontrado.`);
      return;
    }

    const entradaAtual = veiculo.historicoEntradaSaidas.find((h) => h.saida === null);
    if (!entradaAtual) {
      console.log(`Nenhuma entrada registrada para o veículo ${veiculo.placa}.`);
      return;
    }

    entradaAtual.saida = new Date();
    console.log(`Saída registrada para o veículo ${veiculo.placa}.`);
  }

  adicionarManutencao(idVeiculo: string, manutencao: Manutencao): void {
    const veiculo = this.veiculos.find((v) => v.id === idVeiculo);
    if (!veiculo) {
      console.log(`Veículo com ID ${idVeiculo} não encontrado.`);
      return;
    }

    veiculo.manutencoes.push(manutencao);

    // Atualiza o status do veículo se a manutenção estiver pendente
    if (manutencao.status === 'Pendente') {
      veiculo.status = 'Em manutenção';
    }

    console.log(`Manutenção registrada para o veículo ${veiculo.placa}.`);
  }

  concluirManutencao(idVeiculo: string, idManutencao: string): void {
    const veiculo = this.veiculos.find((v) => v.id === idVeiculo);
    if (!veiculo) {
      console.log(`Veículo com ID ${idVeiculo} não encontrado.`);
      return;
    }

    const manutencao = veiculo.manutencoes.find((m) => m.id === idManutencao);
    if (!manutencao) {
      console.log(`Manutenção com ID ${idManutencao} não encontrada.`);
      return;
    }

    manutencao.status = 'Concluída';

    // Verifica se todas as manutenções estão concluídas para liberar o veículo
    const manutencoesPendentes = veiculo.manutencoes.some((m) => m.status === 'Pendente');
    if (!manutencoesPendentes) {
      veiculo.status = 'Disponível';
    }

    console.log(`Manutenção concluída para o veículo ${veiculo.placa}.`);
  }

  alterarStatusVeiculo(idVeiculo: string, novoStatus: Veiculo['status']): void {
    const veiculo = this.veiculos.find((v) => v.id === idVeiculo);
    if (!veiculo) {
      console.log(`Veículo com ID ${idVeiculo} não encontrado.`);
      return;
    }

    veiculo.status = novoStatus;
    console.log(`Status do veículo ${veiculo.placa} alterado para: ${novoStatus}.`);
  }

  listarVeiculos(): void {
    if (this.veiculos.length === 0) {
      console.log('Nenhum veículo cadastrado na frota.');
      return;
    }

    console.log('Lista de veículos na frota:');
    this.veiculos.forEach((veiculo) => {
      console.log(
        `ID: ${veiculo.id}, Placa: ${veiculo.placa}, Modelo: ${veiculo.modelo}, Ano: ${veiculo.ano}, Cor: ${veiculo.cor}, Status: ${veiculo.status}`,
      );
    });
  }

  listarVeiculosDisponiveis(): Veiculo[] {
    return this.veiculos.filter((veiculo) => veiculo.status === 'Disponível');
  }

  listarVeiculosEmManutencao(): Veiculo[] {
    return this.veiculos.filter((veiculo) => veiculo.status === 'Em manutenção');
  }

  buscarVeiculoPorPlaca(placa: string): Veiculo | undefined {
    return this.veiculos.find((veiculo) => veiculo.placa === placa);
  }

  buscarVeiculoPorId(id: string): Veiculo | undefined {
    return this.veiculos.find((veiculo) => veiculo.id === id);
  }

  obterHistoricoManutencoes(idVeiculo: string): Manutencao[] {
    const veiculo = this.veiculos.find((v) => v.id === idVeiculo);
    return veiculo ? veiculo.manutencoes : [];
  }

  obterHistoricoEntradaSaida(idVeiculo: string): HistoricoEntradaSaida[] {
    const veiculo = this.veiculos.find((v) => v.id === idVeiculo);
    return veiculo ? veiculo.historicoEntradaSaidas : [];
  }
}

// Exemplo de uso
const frota = new Frota();

// Criar veículo de exemplo
const veiculo1: Veiculo = {
  id: '001',
  placa: 'ABC-1234',
  modelo: 'Honda Civic',
  ano: 2022,
  cor: 'Prata',
  quilometragem: 15000,
  tipoCombustivel: 'Gasolina',
  capacidadeTanque: 50,
  status: 'Disponível',
  manutencoes: [],
  historicoEntradaSaidas: [],
};

// Cadastrar veículo
frota.cadastrarVeiculo(veiculo1);

// Registrar entrada e saída
frota.registrarEntrada('001');
frota.registrarSaida('001');

// Adicionar manutenção
const manutencao1: Manutencao = {
  id: 'M001',
  tipo: 'Preventiva',
  descricao: 'Troca de óleo e filtros',
  data: new Date(),
  status: 'Pendente',
};

frota.adicionarManutencao('001', manutencao1);

// Listar veículos
frota.listarVeiculos();
