import { Veiculo } from './veiculo';
import { StatusVeiculos, CategoriaCNH } from './enum';

export class Carro extends Veiculo {
  private custoFixoPorKm: number = 0.5;

  constructor(
    placa: string,
    modelo: string,
    ano: number,
    quilometragem: number = 0,
    custoManutencao: number = 0,
  ) {
    super(placa, modelo, ano, quilometragem, custoManutencao);
  }

  getCategoriaMinimaCNH(): CategoriaCNH {
    return CategoriaCNH.B;
  }

  calcularCustoPorKm(): number {
    return this.custoFixoPorKm;
  }
}
