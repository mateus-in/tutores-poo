import { Veiculos } from './veiculo';
import { StatusVeiculos } from './enum';

// Define a classe Carro que estende Veiculos
// Ela deve implementar o método CalcularCustoPorKM() e ter um atributo adicional: tipoDeCombustivel
// O método CalcularCustoPorKM() deve retornar o custo por quilômetro baseado no tipo de combustível
export class Carro extends Veiculos {
  CalcularCustoPorKM(): number {
    throw new Error('Method not implemented.');
  }
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
}
