import { Reserva } from './Reserva';
import { Quarto } from '../tiposdequarto/Quarto';
class RelatorioHotel {
  dataInicio: Date;
  dataFim: Date;
  reservasAnalisadas: Reserva[];

  constructor(dataInicio: Date, dataFim: Date, reservasAnalisadas: Reserva[]) {
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
    this.reservasAnalisadas = reservasAnalisadas;
  }

  calcularReceitaTotal(): number {
    return this.reservasAnalisadas.reduce((total, reserva) => {
      return total + reserva.calcularValorTotal();
    }, 0);
  }

  calcularTaxaOcupacao(): number {
    const diasPeriodo =
      (this.dataFim.getTime() - this.dataInicio.getTime()) / (1000 * 60 * 60 * 24);
    const totalQuartos = this.calcularReceitaTotal();

    const totalDiariasOcupadas = this.reservasAnalisadas.reduce((soma, reserva) => {
      const diasHospedado =
        (reserva.dataCheckout.getTime() - reserva.dataCheckin.getTime()) / (1000 * 60 * 60 * 24);
      return soma + Math.ceil(diasHospedado);
    }, 0);

    const capacidadeTotal = totalQuartos * diasPeriodo;
    return capacidadeTotal > 0 ? (totalDiariasOcupadas / capacidadeTotal) * 100 : 0;
  }
  obterQuartosMaisReservados(): Quarto[] {
    const contador: Record<string, { quarto: Quarto; quantidade: number }> = {};

    for (const reserva of this.reservasAnalisadas) {
      const id = reserva.quarto.numero;
      if (!contador[id]) {
        contador[id] = { quarto: reserva.quarto, quantidade: 0 };
      }
      contador[id].quantidade += 1;
    }

    const ordenados = Object.values(contador).sort((a, b) => b.quantidade - a.quantidade);
    return ordenados.slice(0, 5).map((item) => item.quarto); // Retorna os 5 mais reservados
  }

  calcularTicketMedio(): number {
    const totalReceita = this.calcularReceitaTotal();
    const totalReservas = this.reservasAnalisadas.length;

    return totalReservas > 0 ? totalReceita / totalReservas : 0;
  }
}
