import { Aeronave } from "./Aeronave";
import { Voo} from "./Voo";
import { Passageiro} from "./Passageiro";
import { Reserva } from "./Reserva";
import { StatusReserva } from "./enums/StatusReserva";
 export class CompanhiaAerea {

  nome: string;
  voos: Voo[];
  aeronaves: Aeronave[];
  passageiros: Passageiro[];
  reservas: Reserva[];

  constructor(nome: string) {
    this.nome = nome;
    this.voos = [];
    this.aeronaves = [];
    this.passageiros = [];
    this.reservas = [];
  }

  cadastrarVoo(voo: Voo): void {
    this.voos.push(voo);
    console.log(`Voo ${voo.numeroVoo} cadastrado com sucesso!`);
  }

  buscarVoos(origem: string, destino: string, data: Date): Voo[] {
    return this.voos.filter(voo =>
      voo.origem === origem &&
      voo.destino === destino &&
      voo.dataPartida.toDateString() === data.toDateString()
    );
  }

  fazerReserva(reserva: Reserva): boolean {
    const voo = this.voos.find(v => v.numeroVoo === reserva.voo.numeroVoo);
        if (!voo) {
            console.log("Voo não encontrado!");
            return false;
        }

    
        const assentosDisponiveis = voo.verificarDisponibilidade();
        if (assentosDisponiveis <= 0) {
            console.log("Não há assentos disponíveis!");
            return false;
        }

    
        this.reservas.push(reserva);
        voo.reservas.push(reserva);
        console.log(`Reserva realizada para ${reserva.passageiro.nome} no voo ${voo.numeroVoo}`);
        return true;
    }
 realizarCheckIn(reservaId: string): boolean {
        const reserva = this.reservas.find(r => r.id === reservaId);
        if (!reserva) {
            console.log("Reserva não encontrada!");
            return false;
        }

        if (reserva.status ! == StatusReserva.CONFIRMADA) {
              console.log("Check-in só pode ser feito em reservas confirmadas!");
        return false;
    }


    reserva.realizarCheckIn();
    console.log(`Check-in realizado para ${reserva.passageiro.nome}`);
    return true;
}
cancelarReserva(reservaId: string): boolean {
    
    const index = this.reservas.findIndex(reserva => reserva.id === reservaId);

    if (index !== -1) {
      
      this.reservas.splice(index, 1);
      console.log(`Reserva ${reservaId} cancelada com sucesso! `);
      return true;
    } else {
      console.log(`Reserva ${reservaId} não encontrada. `);
      return false;
    }
  }
}
    

    

  



