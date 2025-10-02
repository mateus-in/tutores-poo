import { Quarto } from '../tiposdequarto/Quarto';
import { Hospede } from './Hospede';
import { Reserva } from './Reserva';
import { ServicoAdicional } from './ServicoAdicional';
import { StatusQuarto } from '../Enums/enumStatusQuarto';
import { StatusReserva } from '../Enums/enumStatusReserva';
export class Hotel {
  public nome: string;
  public endereco: string;
  public quartos: Quarto[];
  public hospedes: Hospede[];
  public reservas: Reserva[];
  public servicosDisponiveis: ServicoAdicional[];

  constructor(
    nome: string,
    endereco: string,
    quartos: Quarto[] = [],
    hospedes: Hospede[] = [],
    reservas: Reserva[] = [],
    servicosDisponiveis: ServicoAdicional[] = [],
  ) {
    this.nome = nome;
    this.endereco = endereco;
    this.quartos = quartos;
    this.hospedes = hospedes;
    this.reservas = reservas;
    this.servicosDisponiveis = servicosDisponiveis;
  }

  adicionarQuarto(quarto: Quarto): void {
    this.quartos.push(quarto);
  }

  buscarQuartosDisponiveis(dataCheckin: Date, dataCheckout: Date): Quarto[] {
    return this.quartos.filter(
      (quarto) =>
        quarto.estaDisponivel() &&
        !this.reservas.some(
          (reserva) =>
            reserva.quarto === quarto &&
            reserva.status !== StatusReserva.CANCELADA &&
            ((dataCheckin >= reserva.dataCheckin && dataCheckin < reserva.dataCheckout) ||
              (dataCheckout > reserva.dataCheckin && dataCheckout <= reserva.dataCheckout)),
        ),
    );
  }

  fazerReserva(reserva: Reserva): boolean {
    const disponiveis = this.buscarQuartosDisponiveis(reserva.dataCheckin, reserva.dataCheckout);
    if (disponiveis.includes(reserva.quarto)) {
      reserva.confirmarReserva();
      this.reservas.push(reserva);
      reserva.hospede.adicionarReserva(reserva);
      reserva.quarto.alterarStatus(StatusQuarto.OCUPADO);
      return true;
    }
    return false;
  }

  cancelarReserva(reservaId: string): boolean {
    const reserva = this.reservas.find((r) => r.id === reservaId);
    if (reserva && reserva.status !== StatusReserva.CANCELADA) {
      reserva.status = StatusReserva.CANCELADA;
      reserva.quarto.alterarStatus(StatusQuarto.DISPONIVEL);
      return true;
    }
    return false;
  }

  consultarOcupacao(data: Date): number {
    const ocupados = this.reservas.filter(
      (reserva) =>
        reserva.status === StatusReserva.CONFIRMADA &&
        data >= reserva.dataCheckin &&
        data < reserva.dataCheckout,
    );
    return (ocupados.length / this.quartos.length) * 100;
  }
}
