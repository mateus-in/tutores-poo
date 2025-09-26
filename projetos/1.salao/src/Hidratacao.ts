import { Servico } from './Servico';
import { Promocao } from './Promocao';

export class Hidratacao implements Servico {
  constructor(
    public nome: string,
    public precoBase: number,
    public duracaoMinutos: number,
    public tipoProduto: string,
    public promocao?: Promocao, // Adiciona a promoção como um atributo opcional
  ) {
    //
  }
// criado método privado para calcular o preço conforme o tipo do produto
  private calcularPrecoProduto(): number {
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
// atualizado o método calcularPrecoFinal para considerar a promoção
  calcularPrecoFinal(): number {
    let preco = this.calcularPrecoProduto();

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