import { Veiculo } from './veiculo';
import { StatusVeiculos, CategoriaCNH } from './enum';

export class Van extends Veiculo {
  //IMPLEMENTAR TIPO CNH CATEGORIA D

  private numeroAssentos: number;

  constructor(
    placa: string,
    modelo: string,
    ano: number,
    quilometragem: number = 0,
    custoManutencao: number = 0,
    numeroAssentos: number = 12,
  ) {
    super(placa, modelo, ano, quilometragem, custoManutencao);
    this.numeroAssentos = numeroAssentos;
  }

  getCategoriaMinimaCNH(): CategoriaCNH {
    return CategoriaCNH.D;
  }

  calcularCustoPorKm(): number {
    const base = 0.6;
    const adicionalPorAssento = 0.05;
    return base + this.numeroAssentos * adicionalPorAssento;
  }
}
