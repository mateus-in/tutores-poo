import { Viagem } from './viagem';
import { Veiculos } from './veiculo';

export class Motorista {
  constructor(
    public nome: string,
    public cpf: string,
    public categoriaCNH: string, // Exemplo: 'B', 'C', 'D', etc.
    public dataVencimentoCnh: Date,
    private historicoViagens: string[] = [], // Array para armazenar o histórico de viagens
  ) {}
  podeConduzir(veiculo: Veiculos): boolean {
    // Verifica se o motorista tem a categoria CNH necessária para conduzir o veículo
    if (
      veiculo.categoriaCNHObrigatoria &&
      !this.categoriaCNH.includes(veiculo.categoriaCNHObrigatoria)
    ) {
      return false; // Motorista não pode conduzir o veículo
    }
    return true; // Motorista pode conduzir o veículo
  }
  cnhValida(): boolean {
    // Verifica se a CNH do motorista está vencida
    const hoje = new Date();
    return this.dataVencimentoCnh > hoje; // Retorna true se a CNH é válida, false caso contrário
  }
  adicionarViagem(viagem: Viagem): void {
    // Adiciona uma viagem ao histórico de viagens do motorista
    if (viagem && viagem.destino && viagem.dataInicio && viagem.dataFim) {
      this.historicoViagens.push(
        `Viagem para ${
          viagem.destino
        } de ${viagem.dataInicio.toLocaleDateString()} até ${viagem.dataFim.toLocaleDateString()}`,
      );
    } else {
      throw new Error('Dados da viagem inválidos.');
    }
  }
  getHistoricoViagens(): string[] {
    // Retorna o histórico de viagens do motorista
    return this.historicoViagens;
  }
}
