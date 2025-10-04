import { Servico } from './Servico';
import { Promocao } from './Promocao';
export class Manicure implements Servico {
  constructor(
    public nome: string,
    public precoBase: number,
    public duracaoMinutos: number = 45,
    public promocao?: Promocao,
    //retirado tipoProduto: string
    public pedicure?: number,
  ) {}

  private calcularAdicionalPedicure(): number {
    if (this.pedicure) {
      return this.precoBase + this.pedicure;
    }
    return this.precoBase;
  }

  calcularPrecoFinal(): number {
    let preco = this.calcularAdicionalPedicure();

    if (this.promocao) {
      const estaAtiva = this.promocao.estaAtiva();
      const aplicavel = this.promocao.aplicavelAoServico(this);

      if (estaAtiva && aplicavel) {
        const desconto = this.promocao.calcularDesconto(preco);
        preco -= desconto;
      }
    }

    return preco;
  }
}
