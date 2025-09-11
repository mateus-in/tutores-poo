import { Servico } from './Servico';

export class Hidratacao implements Servico {
  constructor(
    public nome: string,
    public precoBase: number,
    public duracaoMinutos: number,
    public tipoProduto: string,
  ) {
    //
  }

  calcularPrecoFinal(): number {
    switch (this.tipoProduto) {
      case 'premium':
        return this.precoBase * 1.5;
      case 'standard':
        return this.precoBase * 1.2;
      case 'economico':
        return this.precoBase;
      default:
        throw new Error('Tipo de produto inválido');
    }
  }
}
