import { StatusViagem, StatusVeiculos } from './enum';
import { Motorista } from './Motorista';
import { Veiculo } from './veiculo';

export class Viagem {
  public id: string;
  public motorista: Motorista;
  public veiculo: Veiculo;
  public origem: string;
  public destino: string;
  public dataInicio: Date;
  public dataFim?: Date;
  public quilometragemInicial: number;
  public quilometragemFinal?: number;
  public status: StatusViagem;

  constructor(
    id: string,
    motorista: Motorista,
    veiculo: Veiculo,
    origem: string,
    destino: string,
    dataInicio: Date,
    quilometragemInicial: number,
  ) {
    this.id = id;
    this.motorista = motorista;
    this.veiculo = veiculo;
    this.origem = origem;
    this.destino = destino;
    this.dataInicio = dataInicio;
    this.quilometragemInicial = quilometragemInicial;
    this.status = StatusViagem.Planejada;
  }

  iniciarViagem(): void {
    if (this.status !== StatusViagem.Planejada) {
      throw new Error('Viagem já foi iniciada ou não pode ser iniciada.');
    }
    this.status = StatusViagem.Em_Andamento;
    this.veiculo.alterarStatus(StatusVeiculos.Em_Transito);
  }

  finalizarViagem(dataFim: Date, kmFinal: number): void {
    if (this.status !== StatusViagem.Em_Andamento) {
      throw new Error('A viagem não está em andamento.');
    }

    if (kmFinal <= this.quilometragemInicial) {
      throw new Error('Quilometragem final deve ser maior que a inicial.');
    }

    this.dataFim = dataFim;
    this.quilometragemFinal = kmFinal;
    this.status = StatusViagem.Concluida;

    this.veiculo.atualizarQuilometragem(kmFinal);
    this.veiculo.alterarStatus(StatusVeiculos.Disponivel);
    this.motorista.adicionarViagem(this);
  }

  calcularDistanciaPercorrida(): number {
    if (this.quilometragemFinal === undefined) {
      throw new Error('Viagem ainda não foi finalizada.');
    }
    return this.quilometragemFinal - this.quilometragemInicial;
  }

  calcularCustoViagem(): number {
    const distancia = this.calcularDistanciaPercorrida();
    const custoPorKm = this.veiculo.calcularCustoPorKm();
    return distancia * custoPorKm;
  }

  getStatus(): StatusViagem {
    return this.status;
  }

  getResumo(): string {
    return `Viagem ${this.id} de ${this.origem} para ${
      this.destino
    }, motorista: ${this.motorista.getNome()}, status: ${this.status}`;
  }
}
