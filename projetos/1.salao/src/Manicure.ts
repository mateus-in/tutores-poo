import { Servico } from './Servico';
import { Promocao } from './Promocao';
export class Manicure implements Servico {
  constructor(
    public nome: string,
    public precoBase: number,
    public duracaoMinutos: number,
    public promocao?: Promocao,
    //retirado tipoProduto: string
    public pedicure?: number
  ) {}

  private calcularAdicionalPedicure(): number {
    if (this.pedicure) {
      return this.precoBase + this.pedicure;
    }
    return this.precoBase;
  }

  calcularPrecoFinal(): number {
    let preco = this.calcularAdicionalPedicure();

     if (this.promocao && this.promocao.estaAtiva() && this.promocao.aplicavelAoServico(this)) {
      preco -= this.promocao.calcularDesconto(preco);
    }

    return preco;
  }
}