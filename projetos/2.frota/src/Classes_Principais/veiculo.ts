//import enum status veiculos
import { StatusVeiculos, CategoriaCNH } from './enum';

export abstract class Veiculo {
  public placa: string;
  public modelo: string;
  public ano: number;
  public quilometragem: number;
  public status: StatusVeiculos;
  public custoManutencao: number;

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

  getQuilometragem(): number {
    return this.quilometragem;
  }

  getModelo(): string {
    return this.modelo;
  }
}
