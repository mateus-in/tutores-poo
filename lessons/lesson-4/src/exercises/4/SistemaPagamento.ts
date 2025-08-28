import { IProcessadorPagamento } from './IProcessadorPagamento';

export class SistemaPagamento {
  private processador: IProcessadorPagamento;

  constructor(processador: IProcessadorPagamento) {
    this.processador = processador;
  }

  realizarPagamento(valor: number): void {
    const sucesso = this.processador.processarPagamento(valor);

    if (sucesso) {
      console.log('Pagamento realizado com sucesso!');
    } else {
      console.log('Falha ao realizar o pagamento!');
    }
  }
}
