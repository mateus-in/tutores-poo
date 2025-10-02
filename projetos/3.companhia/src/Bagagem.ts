import { TipoBagagem } from './enums/TipoBagagem';
export class Bagagem {
  constructor(
    public id: string,
    public tipo: TipoBagagem,
    public peso: number,
    public dimensoes: string, // 50 cm x 20 cm
    public precoExtra:number,
  ) {}

  calcularTaxaExcesso(): number {
    return 1;
  }
  validarDimensoes(): boolean {
    return true;
  }
  validarPeso(): boolean {
    return true;
  }
}
