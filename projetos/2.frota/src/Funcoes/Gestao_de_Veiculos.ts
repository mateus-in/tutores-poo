/*
  - Cadastrar diferentes tipos de veículos na frota
  - Consultar status e disponibilidade dos veículos
  - Atualizar quilometragem e custos operacionais
  - Controlar ciclo de vida (disponível → em viagem → manutenção)
*/

import { StatusVeiculos, StatusViagem } from '../Classes_Principais/enum';

export abstract class GestaoDeVeiculos {
  constructor(
    public placa: string,
    public modelo: string,
    public quilometragem: number,
    public status: StatusVeiculos,
    public custoManutencao: number,
  ) {}
  // Método abstrato que deve ser implementado pelas classes filhas
  abstract cadastrarDiferentesTiposDeVeiculos(): void;

  // Consulta o status atual do veículo
  consultarStatus(): StatusVeiculos {
    return this.status;
  }

  // Verifica se o veículo está disponível
  estaDisponivel(): boolean {
    return this.status === StatusVeiculos.Disponivel;
  }

  // Atualiza a quilometragem do veículo
  atualizarQuilometragem(novaQuilometragem: number): void {
    if (novaQuilometragem < this.quilometragem) {
      throw new Error('A nova quilometragem não pode ser menor que a atual');
    }
    this.quilometragem = novaQuilometragem;
  }

  // Atualiza os custos de manutenção
  atualizarCustoManutencao(novoCusto: number): void {
    if (novoCusto < 0) {
      throw new Error('O custo de manutenção não pode ser negativo');
    }
    this.custoManutencao = novoCusto;
  }

  // Altera o status do veículo
  alterarStatus(novoStatus: StatusVeiculos): void {
    // Validação de transições de status permitidas
    if (this.status === novoStatus) {
      return; // Se o status é o mesmo, não faz nada
    }

    // Implementa o ciclo de vida: disponível → em viagem → manutenção
    switch (this.status) {
      case StatusVeiculos.Disponivel:
        if (novoStatus !== StatusVeiculos.Em_Transito) {
          throw new Error('Veículo disponível só pode ir para status EM_VIAGEM');
        }
        break;
      case StatusVeiculos.Em_Transito:
        if (
          novoStatus !== StatusVeiculos.EM_Manutencao &&
          novoStatus !== StatusVeiculos.Disponivel
        ) {
          throw new Error('Veículo em viagem só pode ir para MANUTENCAO ou voltar para DISPONIVEL');
        }
        break;
      case StatusVeiculos.EM_Manutencao:
        if (novoStatus !== StatusVeiculos.Disponivel) {
          throw new Error('Veículo em manutenção só pode voltar para DISPONIVEL');
        }
        break;
    }

    this.status = novoStatus;
  }
}
