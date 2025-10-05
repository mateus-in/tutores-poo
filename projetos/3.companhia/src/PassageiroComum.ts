import { Bagagem } from './Bagagem';
import { Passageiro } from './Passageiro';
import { TipoBagagem } from './enums/TipoBagagem';

export class PassageiroComum extends Passageiro {
  constructor(
    public id: string,
    public nome: string,
    public documento: string,
    public email: string,
    public telefone: string,
  ) {
    super(id, nome, documento, email, telefone);
  }

  calcularPrecoPassagem(precoBase: number): number {
    return precoBase;
  }

  validarBagagem(bagagens: Bagagem[]): boolean {
    // Filtra bagagens por tipo
    const bagagensMao = bagagens.filter((b) => b.tipo === TipoBagagem.BAGAGEM_MAO);
    const bagagensDespachadas = bagagens.filter((b) => b.tipo === TipoBagagem.BAGAGEM_DESPACHADA);

    // Deve haver exatamente 1 de cada tipo
    if (bagagensMao.length !== 1 || bagagensDespachadas.length !== 1) {
      return false;
    }

    // Verifica peso das bagagens
    const maoValida = bagagensMao[0].peso <= 10;
    const despachadaValida = bagagensDespachadas[0].peso <= 23;

    return maoValida && despachadaValida;
  }
}
