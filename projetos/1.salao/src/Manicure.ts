import { Servico } from './Servico';

export class Manicure implements Servico {
  constructor(
    public nome: string,
    public precoBase: number,
    public duracaoMinutos: number,
    public tipoProduto: string,
  ) {
    //
  }

  calcularPrecoFinal(): number {
    return this.precoBase;
  }
}
