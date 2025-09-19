import { Veiculos } from './veiculo';
import { Motorista } from './Motorista';
import { Viagem } from './viagem';
import { Manutencao } from '../Classes_de_Apoio/manutencao';
import { StatusVeiculos, StatusViagem } from './enum';

export class Frota {
  constructor(
    public nome: string,
    public veiculos: Veiculos[] = [],
    public motoristas: Motorista[] = [],
    public viagens: Viagem[] = [],
    public manutencoes: Manutencao[] = [],
  ) {}

  adicionarVeiculo(veiculo: Veiculos): void {
    this.veiculos.push(veiculo);
  }
  alocarVeiculo(motorista: Motorista, veiculo: Veiculos): boolean {
    if (!this.motoristas.includes(motorista)) {
      throw new Error('Motorista não pertence a esta frota.');
    }
    if (!this.veiculos.includes(veiculo)) {
      throw new Error('Veículo não pertence a esta frota.');
    }
    // Lógica para alocar o veículo ao motorista
    return true;
  }
  iniciarViagem(viagem: Viagem): void {
    if (!this.motoristas.includes(viagem.motorista)) {
      throw new Error('Motorista não pertence a esta frota.');
    }
    this.viagens.push(viagem);
    viagem.status = StatusViagem.Em_Andamento;
  }
  finalizarViagem(viagem: Viagem, quilometragemFinal: number): void {
    if (!this.viagens.includes(viagem)) {
      throw new Error('Viagem não pertence a esta frota.');
    }
    viagem.status = StatusViagem.Concluida;
    viagem.quilometragemFinal = quilometragemFinal;
    viagem.finalizarViagem(quilometragemFinal);
  }
  consultarVeiculosDisponiveis(): Veiculos[] {
    return this.veiculos.filter((v) => v.status === StatusVeiculos.Disponivel);
  }
}
