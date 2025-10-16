import { TipoBagagem } from './enums/TipoBagagem';
export class Bagagem {
  constructor(
    public id: string,
    public tipo: TipoBagagem,
    public peso: number,
    public dimensoes: string, // 50 cm x 20 cm
    public precoExtra: number,
  ) {}
  //eu tive dificulade pra passar o teste  calcularTaxaExcesso,para cada passageiro se a funcao nao der certo apagar ou modificar
  calcularTaxaExcesso(passageiro: any): number {
    let limitePeso = 0;

    // Limites por tipo de passageiro
    if (passageiro.constructor.name === 'PassageiroVip') {
      if (this.tipo === TipoBagagem.BAGAGEM_MAO) limitePeso = 10;
      else if (this.tipo === TipoBagagem.BAGAGEM_DESPACHADA) limitePeso = 32;
      else if (this.tipo === TipoBagagem.BAGAGEM_ESPECIAL) limitePeso = 35;
    } else if (passageiro.constructor.name === 'PassageiroCrianca') {
      if (this.tipo === TipoBagagem.BAGAGEM_MAO) limitePeso = 5;
      else if (this.tipo === TipoBagagem.BAGAGEM_DESPACHADA) limitePeso = 20;
    } else {
      // Passageiro comum
      if (this.tipo === TipoBagagem.BAGAGEM_MAO) limitePeso = 10;
      else if (this.tipo === TipoBagagem.BAGAGEM_DESPACHADA) limitePeso = 23;
    }

    if (this.peso > limitePeso) {
      return (this.peso - limitePeso) * 20;
    } else {
      return 0;
    }
  }

  validarDimensoes(): boolean {
    const regex = /^\d+cmx\d+cm$/;
    return regex.test(this.dimensoes);
  }
}
