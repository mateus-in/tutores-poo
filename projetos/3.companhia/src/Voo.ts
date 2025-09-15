import { StatusAssento } from './enums/StatusAssento';
import { Aeronave } from './Aeronave';
import { Reserva } from './Reserva';

export class Voo {
  constructor(
    public numeroVoo: string,
    public origem: string,
    public destino: string,
    public dataPartida: Date,
    public dataChegada: Date,
    public aeronave: Aeronave,
    public precoBase: number,
    public assentos: Map<string, StatusAssento>,
    public reservas: Reserva[],
  ) {}

  verificarDisponibilidade(): number {
    return 1;
  }
  reservarAssento(numeroAssento: string): boolean {
    return true;
  }
  calcularReceitaTotal(): number {
    return 1;
  }
  listarAssentosDisponiveis(): string[] {
    return [];
  }
}
