import { StatusAssento } from './enums/StatusAssento';
import { Aeronave } from './Aeronave';
import { Reserva } from './Reserva';
import { StatusReserva } from './enums/StatusReserva';
import { StatusAeronave } from './enums/StatusAeronave';

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
    decolarvoo(  ):boolean{
      if (this.aeronave.status === StatusAeronave.DISPONIVEL) {
        return true;
      }
      return false;
    }

  verificarDisponibilidade(): number {
     let DISPONIVEL = 0;
        this.assentos.forEach(status => {
            if (status === StatusAssento.DISPONIVEL)DISPONIVEL++;
        });
        return DISPONIVEL;  
  }
  reservarAssento(numeroAssento: string): boolean {
     const status = this.assentos.get(numeroAssento) ;
        if (status=== StatusAssento.DISPONIVEL) {
            this.assentos.set(numeroAssento, StatusAssento.RESERVADO);
            return true;
        }
        return false;
  }
  calcularReceitaTotal(): number {
      return this.reservas
            .filter(r => r.status === StatusReserva.CONFIRMADA)
            .reduce((total, r) => total + r.precoTotal, 0);
  }
  listarAssentosDisponiveis(): string[] {
    const DISPONIVEL: string[] = [];
        this.assentos.forEach((status, numero) => {
            if (status === StatusAssento.DISPONIVEL) DISPONIVEL.push(numero);
        });
        return DISPONIVEL
  }
}
