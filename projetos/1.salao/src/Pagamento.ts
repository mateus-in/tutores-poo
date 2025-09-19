import { MetodoPagamento } from './MetodoPagamento';
import { StatusPagamento } from './StatusPagamento';

export class Pagamento {
  constructor(
    public valor: number,
    public metodoPagamento: MetodoPagamento,
    public status: StatusPagamento,
    public dataProcessamento: Date,
  ) {}
  processar(): boolean {
    if (this.status === StatusPagamento.APROVADO) {
      return true;
    }
    return false;
  }

  calcularTroco(valorRecebido: number): number {
    if (this.metodoPagamento === MetodoPagamento.DINHEIRO) {
      return valorRecebido - this.valor;
    }
    return 0;
  }
}
