import { IProcessadorPagamento } from './IProcessadorPagamento';

export class ProcessadorCartaoCredito implements IProcessadorPagamento {
  public numeroCartao: string;

  constructor(numeroCartao: string) {
    this.numeroCartao = numeroCartao;
  }

  processarPagamento(valor: number): boolean {
    if (this.numeroCartao.length === 16) {
      console.log('Pagamento com cartão de crédito aprovado!');
      return true;
    } else {
      console.log('Pagamento com cartão de crédito reprovado!');
      return false;
    }
  }
}
