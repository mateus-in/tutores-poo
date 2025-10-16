import { Pedido } from './Pedido';
import { FormaPagamento, StatusPagamento } from './Enum';

export class Pagamento {
  public id: string;
  public pedido: Pedido[];
  public valor: number;
  public formaPagamento: FormaPagamento;
  public status: StatusPagamento;
  public dataProcessamento: Date;

  constructor(
    id: string,
    pedido: Pedido[],
    valor: number,
    formaPagamento: FormaPagamento,
    status: StatusPagamento,
    dataProcessamento: Date,
  ) {
    this.id = id;
    this.pedido = pedido;
    this.valor = valor;
    this.formaPagamento = formaPagamento;
    this.status = status;
    this.dataProcessamento = dataProcessamento;
  }

  processar(): boolean {
    if (this.status === StatusPagamento.APROVADO) {
      console.log('Pagamento já aprovado.');
      return true;
    }

    if (
      this.formaPagamento === FormaPagamento.CARTAO_CREDITO ||
      this.formaPagamento === FormaPagamento.CARTAO_DEBITO
    ) {
      if (!this.validarCartao()) {
        this.status = StatusPagamento.RECUSADO;
        return false;
      }
    }

    this.status = StatusPagamento.APROVADO;
    console.log('Pagamento aprovado!');
    return true;
  }

  calcularParcelas(numeroParcelas: number): number {
    return this.valor / numeroParcelas;
  }

  validarCartao(): boolean {
    return true;
  }
}
