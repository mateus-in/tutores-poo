import { Reserva } from './Reserva';
import { StatusReserva } from '../Enums/enumStatusReserva';

export class Hospede {
  private historicoReservas: Reserva[] = [];
  constructor(
    public readonly id: string,
    public nome: string,
    public documento: string,
    public email: string,
    public telefone: string,
    public dataNascimento: Date,
  ) {}
  calcularIdade(): number {
    const hoje = new Date();
    let idade = hoje.getFullYear() - this.dataNascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();
    const mesNascimento = this.dataNascimento.getMonth();
    const diaNascimento = this.dataNascimento.getDate();
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
      idade--;
    }
    return idade;
  }
  adicionarReserva(reserva: Reserva): void {
    this.historicoReservas.push(reserva);
  }

  obterReservasAtivas(): Reserva[] {
    return this.historicoReservas.filter(
      (r) => r.status === StatusReserva.CONFIRMADA || r.status === StatusReserva.CHECKIN_REALIZADO,
    );
  }
}
