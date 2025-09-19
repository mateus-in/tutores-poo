import { Viagem } from '../Classes_Principais/viagem';

export default class RelatorioFrota {
  constructor(
    public dataInicio: Date,
    public dataFim: Date,
    public viagensAnalisadas: Viagem[] = [],
  ) {}

  calcularcustototalperiodo(): number {
    return this.viagensAnalisadas.reduce((total, viagem) => total + viagem.calcularCustoTotal(), 0);
  }

  obterVeiculoMaisUtilizado(): string | null {
    if (this.viagensAnalisadas.length === 0) {
      return null;
    }

    const veiculoContagem: { [placa: string]: number } = {};
    for (const viagem of this.viagensAnalisadas) {
      const placa = viagem.veiculo.placa;
      veiculoContagem[placa] = (veiculoContagem[placa] || 0) + 1;
    }

    let placaMaisUtilizada: string | null = null;
    let maxContagem = 0;
    for (const placa in veiculoContagem) {
      if (veiculoContagem[placa] > maxContagem) {
        maxContagem = veiculoContagem[placa];
        placaMaisUtilizada = placa;
      }
    }
    return placaMaisUtilizada;
  }

  calcularquilometragemtotal(): { [placa: string]: number } {
    const quilometragemPorVeiculo: { [placa: string]: number } = {};
    for (const viagem of this.viagensAnalisadas) {
      const placa = viagem.veiculo.placa;
      quilometragemPorVeiculo[placa] =
        (quilometragemPorVeiculo[placa] || 0) + viagem.quilometragemFinal;
    }
    return quilometragemPorVeiculo;
  }

  listarMotoristasAtivos(): string[] {
    const motoristasSet = new Set<string>();
    for (const viagem of this.viagensAnalisadas) {
      if (viagem.motorista) {
        motoristasSet.add(viagem.motorista.nome);
      }
    }
    return Array.from(motoristasSet);
  }
}
