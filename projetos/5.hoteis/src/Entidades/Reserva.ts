import { Hospede } from './Hospede';
import { Quarto } from '../tiposdequarto/Quarto';
import { ServicoAdicional } from './ServicoAdicional';
import { StatusReserva } from '../Enums/enumStatusReserva';
import { StatusQuarto } from '../Enums/enumStatusQuarto';

export class Reserva {
  public status: StatusReserva = StatusReserva.PENDENTE;
  public servicosAdicionais: ServicoAdicional[] = [];
  public valorTotal: number = 0;

  constructor(
    public readonly id: string,
    public hospede: Hospede,
    public quarto: Quarto,
    public dataCheckin: Date,
    public dataCheckout: Date,
    public numeroHospedes: number,
  ) {}

  calcularDiarias(): number {
    const msPorDia = 1000 * 60 * 60 * 24;
    return Math.ceil((this.dataCheckout.getTime() - this.dataCheckin.getTime()) / msPorDia);
  }

  calcularValorTotal(): number {
    const diarias = this.calcularDiarias();
    let total = this.quarto.calcularCustoTotal(diarias);

    for (const servico of this.servicosAdicionais) {
      total += servico.calcularCusto(1); // ou quantidade variável
    }

    this.valorTotal = total;
    return total;
  }

  adicionarServico(servico: ServicoAdicional): void {
    this.servicosAdicionais.push(servico);
  }

  confirmarReserva(): void {
    const agora = new Date();
    const limite = new Date(this.dataCheckin);
    limite.setHours(14, 0, 0, 0);

    if (agora > limite) {
      this.status = StatusReserva.CANCELADA;
      throw new Error('Reserva expirada. Cancelada automaticamente.');
    }

    this.status = StatusReserva.CONFIRMADA;
    this.hospede.adicionarReserva(this);
    this.quarto.alterarStatus(StatusQuarto.OCUPADO);
  }

  realizarCheckin(): void {
    const agora = new Date();
    if (agora.getHours() < 14) throw new Error('Check-in só pode ser feito após 14h.');
    this.status = StatusReserva.CHECKIN_REALIZADO;
    this.quarto.alterarStatus(StatusQuarto.OCUPADO);
  }

  realizarCheckout(): void {
    const agora = new Date();
    if (agora.getHours() > 12) throw new Error('Check-out deve ser feito até 12h.');
    this.status = StatusReserva.CHECKOUT_REALIZADO;
    this.quarto.alterarStatus(StatusQuarto.LIMPEZA);
  }
}
