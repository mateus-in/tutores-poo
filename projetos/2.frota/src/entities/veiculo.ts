import { StatusVeiculos } from './enum';

// Define a classe abstrata Veiculos
// Ela deve conter os atributos: placa, modelo, quilometragem, status e custoManutenção
// Deve ter um método abstrato CalcularCustoPorKM() que retorna o custo por quilômetro
// Deve ter métodos para atualizar a quilometragem e alterar o status do veículo
// Os métodos devem lançar erros se os valores forem inválidos
// Exemplo: quilometragem não pode ser negativa, status deve ser um dos valores do enum StatusVeiculos
export abstract class Veiculos {
  constructor(
    placa: string,
    modelo: string,
    quilometragem: number,
    status: StatusVeiculos,
    custoManutenção: number,
  ) {}

  abstract CalcularCustoPorKM(): number;

  atualizarQuilometragem(Km: number): void {
    if (Km < 0) {
      throw new Error('Quilometragem não pode ser negativa.');
    }
    // Lógica para atualizar a quilometragem

    console.log(`Quilometragem atualizada para: ${Km} km`);
  }

  alterarStatus(novoStatus: StatusVeiculos): void {
    if (!Object.values(StatusVeiculos).includes(novoStatus)) {
      throw new Error('Status inválido.');
    }
    // Lógica para alterar o status do veículo

    console.log(`Status alterado para: ${novoStatus}`);
  }
}
