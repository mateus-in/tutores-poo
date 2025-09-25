import { Servico } from './Servico';
import { Promocao } from './Promocao';
export class Manicure implements Servico {
  constructor(
    public promocao: Promocao,
    public nome: string,
    public precoBase: number,
    public duracaoMinutos: number,
    //retirado tipoProduto: string
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
