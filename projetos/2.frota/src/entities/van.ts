import { Veiculos } from './veiculo';
import { StatusVeiculos } from './enum';

export class Van extends Veiculos {
  constructor(
    public placa: string,
    public modelo: string,
    public quilometragem: number,
    public status: StatusVeiculos,
    public custoManutenção: number,
    public numeroAssentos: number, // Atributo adicional
  ) {
    super(placa, modelo, quilometragem, status, custoManutenção);
  }
  CalcularCustoPorKM(): number {
    // Verifica se a quilometragem é zero para evitar divisão por zero
    if (this.quilometragem === 0) {
      throw new Error('Quilometragem não pode ser zero para calcular o custo por KM.');
    }

    // Calcula e retorna o custo por quilômetro
    return this.custoManutenção / this.quilometragem;
  }
}
