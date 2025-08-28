import { IProcessadorPagamento } from './IProcessadorPagamento';

export class ProcessadorPix implements IProcessadorPagamento {
  public chave: string;

  constructor(chave: string) {
    this.chave = chave;
  }

  processarPagamento(valor: number): boolean {
    if (this.chave.includes('@')) {
      console.log('Pagamento com pix aprovado!');
      return true;
    } else {
      console.log('Pagamento com pix reprovado!');
      return false;
    }
  }
}
