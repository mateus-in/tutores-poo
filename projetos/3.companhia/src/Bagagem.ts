
import { TipoBagagem } from './enums/TipoBagagem';
export class Bagagem {
  constructor(
    public id: string,
    public tipo: TipoBagagem,
    public peso: number,
    public dimensoes: string, // 50 cm x 20 cm
    public precoExtra:number,
  ) {}
//eu tive dificulade pra passar o teste  calcularTaxaExcesso,para cada passageiro se a funcao nao der certo apagar ou modificar
  calcularTaxaExcesso(): number {
    let limitePeso = 0;
    if (this.tipo===TipoBagagem.BAGAGEM_MAO) {
      limitePeso = 10;
    } else if (this.tipo===TipoBagagem.BAGAGEM_DESPACHADA){
      limitePeso =23;
    }  else (this.tipo===TipoBagagem.BAGAGEM_ESPECIAL)
    {
      limitePeso = 32;
    }

    if (this.peso>limitePeso) {
      return(this.peso - limitePeso) * 20;
    }else{
      return 0;
    } 
  }
  validarDimensoes(): boolean {
      const regex = /^\d+cmx\d+cm$/;
    return regex.test(this.dimensoes);
  }
  validarPeso(): boolean {
    let limitePeso = 0;
      if (this.tipo === TipoBagagem.BAGAGEM_MAO) {
      limitePeso = 10;
    } else if (this.tipo === TipoBagagem.BAGAGEM_DESPACHADA) {
      limitePeso = 23;
    } else if (this.tipo === TipoBagagem.BAGAGEM_ESPECIAL) {
      limitePeso = 32;
    }

    return this.peso <= limitePeso;
  }
}

  

