import { Reserva } from './Reserva';
import { FormaPagamento } from '../Enums/enumFormaPagamento';
import { StatusPagamento } from '../Enums/enumStatusPagamento';

export class Pagamento {
  id: string;
  reserva: Reserva;
  valor: number;
  formaPagamento: FormaPagamento;
  status: StatusPagamento;
  dataPagamento: Date | null;

  constructor(id: string, reserva: Reserva, valor: number, formaPagamento: FormaPagamento) {
    this.id = id;
    this.reserva = reserva;
    this.valor = valor;
    this.formaPagamento = formaPagamento;
    this.status = StatusPagamento.PENDENTE;
    this.dataPagamento = null;
  }

  processar(): boolean {
    if (this.valor > 0 && this.status === StatusPagamento.PENDENTE) {
      this.status = StatusPagamento.PROCESSADO;
      this.dataPagamento = new Date();
      console.log(
        `Pagamento de R$${this.valor.toFixed(2)} processado via ${
          FormaPagamento[this.formaPagamento]
        }.`,
      );
      return true;
    }
    console.log('Pagamento não pode ser processado.');
    return false;
  }

  calcularTroco(valorPago: number): number {
    if (valorPago >= this.valor) {
      return valorPago - this.valor;
    }
    console.log('Valor pago insuficiente.');
    return 0;
  }

  gerarRecibo(): string {
    return `
      RECIBO DE PAGAMENTO
      --------------------
      ID do Pagamento: ${this.id}
      Reserva: ${this.reserva.id}
      Valor: R$${this.valor.toFixed(2)}
      Forma de Pagamento: ${FormaPagamento[this.formaPagamento]}
      Status: ${StatusPagamento[this.status]}
      Data: ${this.dataPagamento ? this.dataPagamento.toLocaleString() : 'Não processado'}
    `.trim();
  }
}
