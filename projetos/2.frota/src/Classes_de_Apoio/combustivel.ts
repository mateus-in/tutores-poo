import { Veiculos } from '../Classes_Principais/veiculo';

export class Combustivel {
  constructor(
    public veiculo: Veiculos,
    dataAbastecimento: Date,
    litros: number,
    precoLitro: number,
    quilometragemAbastecimento: number,
  ) {}
  calcularCusto(litros: number, precoLitro: number): number {
    return litros * precoLitro;
  }
  calcularConsumoMedio(
    quilometragemInicial: number,
    quilometragemFinal: number,
    litrosAbastecidos: number,
  ): number {
    if (litrosAbastecidos === 0) {
      throw new Error('Litros abastecidos não pode ser zero.');
    }
    return (quilometragemFinal - quilometragemInicial) / litrosAbastecidos;
  }
}
