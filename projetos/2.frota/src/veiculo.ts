//import enum status veiculos
import { StatusVeiculos, CategoriaCNH } from './enum';
import { Combustivel } from './combustivel';

export abstract class Veiculo {
  public placa: string;
  public modelo: string;
  public ano: number;
  public quilometragem: number;
  public status: StatusVeiculos;
  public custoManutencao: number;
  public getCustoFixo(): number {
    return this.custoManutencao;
  }

  constructor(
    placa: string,
    modelo: string,
    ano: number,
    quilometragem: number = 0,
    custoManutencao: number = 0,
  ) {
    this.placa = placa;
    this.modelo = modelo;
    this.ano = ano;
    this.quilometragem = quilometragem;
    this.status = StatusVeiculos.Disponivel;
    this.custoManutencao = custoManutencao;
  }

  abstract calcularCustoPorKm(): number;

  public getTipoCombustivel(): Combustivel | null {
    return null; // Implementação padrão, pode ser sobrescrita em subclasses
  }

  atualizarQuilometragem(km: number): void {
    if (km < this.quilometragem) {
      throw new Error('Quilometragem inválida: menor que a atual.');
    }
    this.quilometragem = km;
  }

  categoriaCNHObrigatoria(): CategoriaCNH {
    return CategoriaCNH.B;
  }

  abstract getCategoriaMinimaCNH(): CategoriaCNH;

  alterarStatus(novoStatus: StatusVeiculos): void {
    this.status = novoStatus;
  }

  getPlaca(): string {
    return this.placa;
  }

  getStatus(): StatusVeiculos {
    return this.status;
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

  getModelo(): string {
    return this.modelo;
  }
}
