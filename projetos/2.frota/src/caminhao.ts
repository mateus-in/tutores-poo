import { Veiculo } from './veiculo';
import { StatusVeiculos, CategoriaCNH, TipoCombustivel, PrecoCombustivel } from './enum';
import { Combustivel } from './combustivel';

export class Caminhao extends Veiculo {
  static getQuilometragem(): number {
    throw new Error('Method not implemented.');
    //IMPLEMENTAR
  }
  //IMPLEMENTAR TIPO CNH CATEGORIA C, D, E

  private capacidadeCarga: number; // em toneladas
  public quilometragem: number = 0; // valor inicial padrão

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

  setLitrosTanque(litros: number): void {
    // Implementação da quantidade de litros no tanque do caminhão

    console.log(`Abastecendo ${litros} litros no tanque do caminhão.`);
  }
  public getTipoCombustivel(): Combustivel | null {
    return new Combustivel(TipoCombustivel.Diesel, 5.5);
  }

  /**
   * Retorna a quilometragem atual do veículo.
   * Garante que seja sempre um número válido e não-negativo.
   * @returns {number} Quilometragem do veículo.
   * @throws {Error} Se a quilometragem estiver inválida.
   */
  public getQuilometragem(): number {
    if (this.quilometragem === undefined || this.quilometragem < 0) {
      throw new Error('Quilometragem inválida: valor indefinido ou negativo.');
    }

    return this.quilometragem;
  }

  /**
   * Define a quilometragem do veículo.
   * Garante que o valor seja um número não-negativo.
   * @param quilometragem Nova quilometragem.
   * @throws {Error} Se o valor for inválido.
   */
  public setQuilometragem(quilometragem: number): void {
    if (quilometragem === undefined || quilometragem < 0) {
      throw new Error('Quilometragem deve ser um número não-negativo.');
    }

    this.quilometragem = quilometragem;
  }

  calcularCustoPorKm(): number {
    const base = 1.0;
    const adicionalPorTonelada = 0.2;
    return base + this.capacidadeCarga * adicionalPorTonelada;
  }
}
