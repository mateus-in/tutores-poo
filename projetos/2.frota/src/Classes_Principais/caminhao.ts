import { Veiculo } from './veiculo';
import { StatusVeiculos, CategoriaCNH } from './enum';

export class Caminhao extends Veiculo {
  static getQuilometragem(): number {
    throw new Error('Method not implemented.');
  }
  //IMPLEMENTAR TIPO CNH CATEGORIA C, D, E

  private capacidadeCarga: number; // em toneladas

  constructor(
    placa: string,
    modelo: string,
    ano: number,
    quilometragem: number = 0,
    custoManutencao: number = 0,
    capacidadeCarga: number = 10,
  ) {
    super(placa, modelo, ano, quilometragem, custoManutencao);
    this.capacidadeCarga = capacidadeCarga;
  }

  getCategoriaMinimaCNH(): CategoriaCNH {
    return CategoriaCNH.C;
  }

  getQuilometragem(): number {
    return this.quilometragem;
  }

  calcularCustoPorKm(): number {
    const base = 1.0;
    const adicionalPorTonelada = 0.2;
    return base + this.capacidadeCarga * adicionalPorTonelada;
  }
}
