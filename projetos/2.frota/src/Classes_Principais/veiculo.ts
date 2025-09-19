import { StatusVeiculos } from './enum';

export abstract class Veiculos {
  constructor(
    public placa: string,
    public modelo: string,
    public quilometragem: number,
    public status: StatusVeiculos,
    public custoManutenção: number,
    public categoriaCNHObrigatoria?: string, // Exemplo: 'B', 'C', 'D', etc.
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
