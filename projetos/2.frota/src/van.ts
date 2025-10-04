import { Veiculo } from './veiculo';
import { StatusVeiculos, CategoriaCNH, TipoCombustivel } from './enum';
import { Combustivel } from './combustivel';

export class Van extends Veiculo {
  //IMPLEMENTAR TIPO CNH CATEGORIA D
  public quilometragem: number = 0; // valor inicial padrão
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

  setLitrosTanque(litros: number): void {
    // Implementação da quantidade de litros no tanque da van

    console.log(`Abastecendo ${litros} litros no tanque da van.`);
  }

  public getTipoCombustivel(): Combustivel | null {
    return new Combustivel(TipoCombustivel.Diesel, 5.5);
  }
  getCategoriaMinimaCNH(): CategoriaCNH {
    return CategoriaCNH.D;
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
    const base = 0.6;
    const adicionalPorAssento = 0.05;
    return base + this.numeroAssentos * adicionalPorAssento;
  }
}
