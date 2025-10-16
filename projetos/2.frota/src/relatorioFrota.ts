import { Viagem } from './viagem';
import { Veiculo } from './veiculo';
import { Motorista } from './Motorista';
import { StatusVeiculos, StatusViagem } from './enum';

export class RelatorioFrota {
  private dataInicio: Date;
  private dataFim: Date;
  private viagensAnalisadas: Viagem[];
  private veiculos: Veiculo[] = [];

  constructor(dataInicio: Date, dataFim: Date, viagens: Viagem[]) {
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;

    // Filtrar viagens que ocorreram no período
    this.viagensAnalisadas = viagens.filter(
      (v) => v.getDataInicio() >= dataInicio && v.getDataInicio() <= dataFim,
    );
  }

  todasAsViagensConcluidas(viagens: Viagem[]): boolean {
    console.log(viagens);
    const todasAsViagens = [...viagens];
    return viagens.every((viagem) => viagem.getStatus() === StatusViagem.Concluida);
  }

  calcularCustoTotalPeriodo(): number {
    return this.viagensAnalisadas.reduce(
      (total, viagem) => total + viagem.calcularCustoViagem(),
      0,
    );
  }

  calcularQuilometragemTotal(): number {
    return this.viagensAnalisadas.reduce(
      (total, viagem) => total + viagem.calcularDistanciaPercorrida(),
      0,
    );
  }

  obterVeiculoMaisUtilizado(): Veiculo | null {
    const contador: Map<string, { veiculo: Veiculo; totalKm: number }> = new Map();

    for (const viagem of this.viagensAnalisadas) {
      const placa = viagem.getVeiculo().getPlaca();
      const distancia = viagem.calcularDistanciaPercorrida();

      if (!contador.has(placa)) {
        contador.set(placa, {
          veiculo: viagem.getVeiculo(),
          totalKm: 0,
        });
      }

      contador.get(placa)!.totalKm += distancia;
    }

    let maisUtilizado: Veiculo | null = null;
    let maxKm = 0;

    for (const dados of contador.values()) {
      if (dados.totalKm > maxKm) {
        maisUtilizado = dados.veiculo;
        maxKm = dados.totalKm;
      }
    }

    console.log(maisUtilizado);

    return maisUtilizado;
  }

  listarMotoristasAtivos(): Motorista[] {
    const idsUnicos = new Set<string>();
    const motoristas: Motorista[] = [];

    for (const viagem of this.viagensAnalisadas) {
      const motorista = viagem.getMotorista();
      if (!idsUnicos.has(motorista.getId())) {
        idsUnicos.add(motorista.getId());
        motoristas.push(motorista);
      }
    }
    console.log(motoristas);
    return motoristas;
  }

  public resumoStatusFrota(): Record<StatusVeiculos, number> {
    const resumo: Record<StatusVeiculos, number> = {
      [StatusVeiculos.Disponivel]: 0,
      [StatusVeiculos.Em_Transito]: 0,
      [StatusVeiculos.EM_Manutencao]: 0,
      [StatusVeiculos.Inativo]: 0,
    };

    for (const veiculo of this.veiculos) {
      resumo[veiculo.getStatus()]++;
    }

    return resumo;
  }
}
