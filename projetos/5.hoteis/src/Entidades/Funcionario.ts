import { CargoFuncionario } from '../Enums/enumCargoFuncionario';
import { Reserva } from './Reserva';
import { TurnoTrabalho } from '../Enums/enumTurnoTrabalho';

export class Funcionario {
  id: string;
  nome: string;
  cargo: CargoFuncionario;
  turno: TurnoTrabalho;

  constructor(id: string, nome: string, cargo: CargoFuncionario, turno: TurnoTrabalho) {
    this.id = id;
    this.nome = nome;
    this.cargo = cargo;
    this.turno = turno;
  }

  realizarCheckin(reserva: Reserva): boolean {
    if (!reserva.dataCheckin) {
      reserva.dataCheckin = new Date();
      console.log(`Check-in realizado para reserva ${reserva.id}`);
      return true;
    }
    console.log(`Check-in já realizado para reserva ${reserva.id}`);
    return false;
  }

  realizarCheckout(reserva: Reserva): number {
    if (reserva.dataCheckin && !reserva.dataCheckout) {
      reserva.dataCheckout = new Date();
      const valor = reserva.calcularValorTotal();
      console.log(`Checkout realizado. Valor total: R$${valor}`);
      return valor;
    }
    console.log(`Checkout não pode ser realizado para reserva ${reserva.id}`);
    return 0;
  }

  processarPagamento(reserva: Reserva, valorPago: number): boolean {
    if (valorPago > 0) {
      console.log(`Pagamento de R$${valorPago} processado com sucesso.`);
      return true;
    }
    console.error(`Valor inválido para pagamento: R$${valorPago}`);
    return false;
  }
}
