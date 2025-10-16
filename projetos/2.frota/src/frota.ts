import { Veiculo } from './veiculo';
import { Motorista } from './Motorista';
import { Viagem } from './viagem';
import { StatusVeiculos, StatusViagem } from './enum';
import { VeiculoIndisponivelException, CNHInvalidaException } from './excecoes';

export class Frota {
  public nome: string;
  public veiculos: Veiculo[] = [];
  public motoristas: Motorista[] = [];
  public viagens: Viagem[] = [];

  constructor(nome: string) {
    this.nome = nome;
  }

  public adicionarVeiculo(veiculo: Veiculo): void {
    this.veiculos.push(veiculo);
  }

  public adicionarMotorista(motorista: Motorista): void {
    this.motoristas.push(motorista);
  }

  public alocarVeiculo(motorista: Motorista, veiculo: Veiculo): boolean {
    if (veiculo.getStatus() !== StatusVeiculos.Disponivel) {
      throw new VeiculoIndisponivelException();
    }

    if (!motorista.cnhValida() || !motorista.podeConduzir(veiculo)) {
      throw new CNHInvalidaException();
    }

    if (!motorista.podeConduzir(veiculo)) {
      throw new CNHInvalidaException();
    }

    veiculo.alterarStatus(StatusVeiculos.Em_Transito);
    return true;
  }

  public iniciarViagem(viagem: Viagem): boolean {
    if (viagem.getStatus() !== StatusViagem.Planejada) {
      console.error('Viagem já foi iniciada ou finalizada.');
      return false;
    }

    this.viagens.push(viagem);
    viagem.iniciarViagem();
    return true;
  }

  public finalizarViagem(viagemId: string, dataFim: Date, kmFinal: number): void {
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

  public consultarVeiculosDisponiveis(): Veiculo[] {
    return this.veiculos.filter((v) => v.getStatus() === StatusVeiculos.Disponivel);
  }
  public buscarPorPlaca(placa: string): Veiculo | undefined {
    return this.veiculos.find((v) => v.getPlaca() === placa);
  }

  public listarViagens(): Viagem[] {
    return this.viagens;
  }

  public listarMotoristas(): Motorista[] {
    return this.motoristas;
  }

  public listarVeiculos(): Veiculo[] {
    return this.veiculos;
  }
  public atualizarQuilometragem(placa: string, novaKm: number): void {
    const veiculo = this.buscarPorPlaca(placa);
    if (veiculo) {
      veiculo.atualizarQuilometragem(novaKm);
    }
  }
}
