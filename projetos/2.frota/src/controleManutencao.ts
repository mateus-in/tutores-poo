import { Veiculo } from './veiculo';
import { Manutencao } from './manutencao';
import { TipoManutencao } from './enum';
import { StatusVeiculos } from './enum';
import { ManutencaoObrigatoriaException } from './excecoes';

export class ControleManutencao {
  private veiculos: Veiculo[];
  private manutencoes: Manutencao[];
  private intervaloPreventivaKm: number;
  getUltimaKmManutencao(veiculo: Veiculo): number {
    const ultimaManutencao = this.obterUltimaManutencao(veiculo);
    return ultimaManutencao ? ultimaManutencao.getQuilometragem() : 0;
  }

  constructor(veiculos: Veiculo[], intervaloPreventivaKm: number = 10000) {
    this.veiculos = veiculos;
    this.manutencoes = [];
    this.intervaloPreventivaKm = intervaloPreventivaKm;
  }

  verificarManutencaoObrigatoria(veiculo: Veiculo): void {
    const kmDesdeUltima = veiculo.getQuilometragem() - this.getUltimaKmManutencao(veiculo);
    if (kmDesdeUltima >= this.intervaloPreventivaKm) {
      throw new ManutencaoObrigatoriaException();
    }
  }

  verificarManutencoesPendentes(): Veiculo[] {
    return this.veiculos.filter((veiculo) => {
      const ultimaManutencao = this.obterUltimaManutencao(veiculo);

      if (!ultimaManutencao) return true; // Nunca fez manutenção → pendente

      const kmDesdeUltima = veiculo.getQuilometragem() - ultimaManutencao.getQuilometragem();
      return kmDesdeUltima >= this.intervaloPreventivaKm;
    });
  }

  agendarManutencao(
    veiculo: Veiculo,
    tipo: TipoManutencao,
    descricao: string,
    custo: number,
  ): Manutencao {
    const manutencao = new Manutencao(
      Math.random().toString(36).substring(2, 15), // Gera um ID simples
      veiculo,
      tipo,
      new Date(),
      custo,
      descricao,
      veiculo.getQuilometragem(),
    );

    manutencao.atualizarCustoVeiculo();
    this.manutencoes.push(manutencao);

    veiculo.alterarStatus(StatusVeiculos.EM_Manutencao);

    return manutencao;
  }

  calcularCustoManutencaoAnual(ano: number): number {
    return this.manutencoes
      .filter((m) => m.getData().getFullYear() === ano)
      .reduce((total, m) => total + m.getCusto(), 0);
  }

  obterUltimaManutencao(veiculo: Veiculo): Manutencao | undefined {
    const historico = this.manutencoes
      .filter((m) => m.getVeiculo() === veiculo)
      .sort((a, b) => b.getData().getTime() - a.getData().getTime());

    return historico[0];
  }

  getHistoricoManutencoes(): Manutencao[] {
    return this.manutencoes;
  }
}
