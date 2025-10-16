import { StatusViagem, StatusVeiculos } from './enum';
import { Motorista } from './Motorista';
import { Veiculo } from './veiculo';
import { ViagemInvalidaException } from './excecoes';

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
  public distanciaPercorrida?: number;

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

  getDataInicio(): Date {
    return this.dataInicio;
  }
  getDataFim(): Date | undefined {
    return this.dataFim;
  }

  getVeiculo(): Veiculo {
    return this.veiculo;
  }
  getMotorista(): Motorista {
    return this.motorista;
  }

  iniciarViagem(): void {
    if (this.status !== StatusViagem.Planejada) {
      throw new Error('Viagem já foi iniciada ou não pode ser iniciada.');
    }
    this.status = StatusViagem.Em_Andamento;
    this.veiculo.alterarStatus(StatusVeiculos.Em_Transito);
  }

  finalizarViagem(dataFim: Date, kmFinal: number): void {
    if (kmFinal <= this.quilometragemInicial) {
      throw new ViagemInvalidaException('Quilometragem final deve ser maior que a inicial.');
    }

    if (dataFim < this.dataInicio) {
      throw new ViagemInvalidaException('Data final não pode ser anterior à data de início.');
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
    return (this.quilometragemFinal - this.quilometragemInicial) / 100;
  }

  calcularCustoViagem(): number {
    const distancia = this.calcularDistanciaPercorrida();
    const custoPorKm = this.veiculo.calcularCustoPorKm();
    return distancia * custoPorKm + this.veiculo.getCustoFixo();
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
