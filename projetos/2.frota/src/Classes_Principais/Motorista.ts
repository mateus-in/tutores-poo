import { Viagem } from './viagem';
import { Veiculo } from './veiculo';
import { CategoriaCNH } from './enum';

export class Motorista {
  constructor(
    public nome: string,
    public cpf: string,
    public categoriaCNH: CategoriaCNH, // Exemplo: 'B', 'C', 'D', etc.
    public dataVencimentoCnh: Date,
    private historicoViagens: string[] = [], // Array para armazenar o histórico de viagens
  ) {}
  podeConduzir(veiculo: Veiculo): boolean {
    if (!this.cnhValida()) return false;

    const categoriaNecessaria = veiculo.getCategoriaMinimaCNH();
    return this.categoriaCNH >= categoriaNecessaria;
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

  getNome(): string {
    return this.nome;
  }

  getHistoricoViagens(): string[] {
    // Retorna o histórico de viagens do motorista
    return this.historicoViagens;
  }
}
