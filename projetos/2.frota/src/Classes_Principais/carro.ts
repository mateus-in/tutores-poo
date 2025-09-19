import { Veiculos } from './veiculo';
import { StatusVeiculos } from './enum';

// Define a classe Carro que estende Veiculos
// Ela deve implementar o método CalcularCustoPorKM() e ter um atributo adicional: tipoDeCombustivel
// O método CalcularCustoPorKM() deve retornar o custo por quilômetro baseado no tipo de combustível
export class Carro extends Veiculos {
  constructor(
    placa: string,
    modelo: string,
    quilometragem: number,
    status: StatusVeiculos,
    custoManutenção: number,
    private tipoDeCombustivel: string, // Atributo adicional
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
