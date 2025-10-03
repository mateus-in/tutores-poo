import { Servico } from './Servico';
import { Promocao } from './Promocao';
export class Corte implements Servico {
  constructor(
    public nome: string,
    public precoBase: number,
    public duracaoMinutos: number,
    //reitrado tipoProduto: string
    public promocao: Promocao
  ) {}

  calcularPrecoFinal(): number {
    const estaAtiva = this.promocao.estaAtiva();
    const aplicavelAoServico = this.promocao.aplicavelAoServico(this);
    const percentualDesconto = this.promocao.percentualDesconto;
    const desconto = this.promocao.calcularDesconto(this.precoBase);

    if (!estaAtiva && !aplicavelAoServico) {
      return this.precoBase;
    }
    return this.precoBase - desconto;
  }
}
