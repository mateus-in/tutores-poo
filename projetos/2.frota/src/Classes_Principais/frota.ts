import { Veiculo } from './veiculo';
import { Motorista } from './Motorista';
import { Viagem } from './viagem';
import { StatusVeiculos, StatusViagem } from './enum';

export class Frota {
  private nome: string;
  private veiculos: Veiculo[] = [];
  private motoristas: Motorista[] = [];
  private viagens: Viagem[] = [];

  constructor(nome: string) {
    this.nome = nome;
  }

  adicionarVeiculo(veiculo: Veiculo): void {
    this.veiculos.push(veiculo);
  }

  adicionarMotorista(motorista: Motorista): void {
    this.motoristas.push(motorista);
  }

  alocarVeiculo(motorista: Motorista, veiculo: Veiculo): boolean {
    if (veiculo.getStatus() !== StatusVeiculos.Disponivel) {
      console.error('Veículo indisponível.');
      return false;
    }

    if (!motorista.cnhValida()) {
      console.error('CNH do motorista está vencida.');
      return false;
    }

    if (!motorista.podeConduzir(veiculo)) {
      console.error('Motorista não pode conduzir este tipo de veículo.');
      return false;
    }

    veiculo.alterarStatus(StatusVeiculos.Em_Transito);
    return true;
  }

  iniciarViagem(viagem: Viagem): boolean {
    if (viagem.getStatus() !== StatusViagem.Planejada) {
      console.error('Viagem já foi iniciada ou finalizada.');
      return false;
    }

    this.viagens.push(viagem);
    viagem.iniciarViagem();
    return true;
  }

  finalizarViagem(viagemId: string, dataFim: Date, kmFinal: number): void {
    const viagem = this.viagens.find((v) => v['id'] === viagemId);

    if (!viagem) {
      console.error('Viagem não encontrada.');
      return;
    }

    try {
      viagem.finalizarViagem(dataFim, kmFinal);
    } catch (error: any) {
      console.error('Erro ao finalizar viagem:', error.message);
    }
  }

  consultarVeiculosDisponiveis(): Veiculo[] {
    return this.veiculos.filter((v) => v.getStatus() === StatusVeiculos.Disponivel);
  }

  listarViagens(): Viagem[] {
    return this.viagens;
  }

  listarMotoristas(): Motorista[] {
    return this.motoristas;
  }

  listarVeiculos(): Veiculo[] {
    return this.veiculos;
  }
}
