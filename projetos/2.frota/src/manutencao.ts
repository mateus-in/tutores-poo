import { Veiculo } from './veiculo';
import { TipoManutencao } from './enum';

export class Manutencao {
  private id: string;
  private veiculo: Veiculo;
  private tipo: TipoManutencao;
  private dataManutencao: Date;
  private custo: number;
  private descricao: string;
  private quilometragemManutencao: number;

  constructor(
    id: string,
    veiculo: Veiculo,
    tipo: TipoManutencao,
    dataManutencao: Date,
    custo: number,
    descricao: string,
    quilometragemManutencao: number,
  ) {
    this.id = id;
    this.veiculo = veiculo;
    this.tipo = tipo;
    this.dataManutencao = dataManutencao;
    this.custo = custo;
    this.descricao = descricao;
    this.quilometragemManutencao = quilometragemManutencao;
  }

  calcularProximaManutencao(intervaloKm: number = 10000): number {
    return this.quilometragemManutencao + intervaloKm;
  }

  atualizarCustoVeiculo(): void {
    // Adiciona custo da manutenção ao custo total de manutenção do veículo
    // Supondo que Veiculo tenha um método ou atributo apropriado (getter/setter)
    const novoCusto = this.veiculo['custoManutencao'] + this.custo;
    this.veiculo['custoManutencao'] = novoCusto;
  }

  getResumo(): string {
    return `[${this.tipo}] ${
      this.descricao
    } | ${this.dataManutencao.toLocaleDateString()} | R$${this.custo.toFixed(2)}`;
  }

  getVeiculo(): Veiculo {
    return this.veiculo;
  }

  getCusto(): number {
    return this.custo;
  }

  getData(): Date {
    return this.dataManutencao;
  }

  getTipo(): TipoManutencao {
    return this.tipo;
  }

  getQuilometragem(): number {
    return this.quilometragemManutencao;
  }
}
