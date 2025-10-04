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
    console.log(bagagens);

    // declarar uma variável para controlar o retorno da função
    let bagagemMaoValida = false;
    let bagagemDespachadaValida = false;

    bagagens.forEach((bagagem) => {
      // procurar uma bagagem do tipo BAGAGEM_MAO
      if (bagagem.tipo === TipoBagagem.BAGAGEM_MAO) {
        // se encontrar, conferir se o peso dela é <= 10
        if (bagagem.peso <= 10) {
          // se for, atribuir true pra variavel dela
          bagagemMaoValida = true;
        } else {
          // se não for, atribuir false pra variável dela
          bagagemMaoValida = false;
        }
      }

      // procurar uma bagagem do tipo BAGAGEM_DESPACHADA
      if (bagagem.tipo === TipoBagagem.BAGAGEM_DESPACHADA) {
        // se encontrar, conferir se o peso dela é <= 23
        if (bagagem.peso <= 23) {
          // se for, atribuir true pra variavel dela
          bagagemDespachadaValida = true;
        } else {
          // se não for, atribuir false pra variável dela
          bagagemDespachadaValida = false;
        }
      }
    });

    return bagagemMaoValida && bagagemDespachadaValida;
  }
}
