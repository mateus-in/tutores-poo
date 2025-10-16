import { Servico } from './Servico';
import { Promocao } from './Promocao';
export class Corte implements Servico {
  constructor(
    public nome: string,
    public precoBase: number,
    public duracaoMinutos: number,
    //reitrado tipoProduto: string
    public promocao?: Promocao
  ) {}

calcularPrecoFinal(): number {
    let preco = this.precoBase;

    if (this.promocao && this.promocao.estaAtiva() && this.promocao.aplicavelAoServico(this)) {
      preco -= this.promocao.calcularDesconto(preco);
    }

    return preco;
  }
}
