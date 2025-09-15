import { Voo } from './Voo';
export class RelatarioVoos {
  constructor(public voos: Voo[]) {}

  calcularReceitaTotal(): number {
    return 1;
  }

  calcularTaxaOcupacao(): number {
    return 1;
  }
  listarVoosMaisPopulares(): Voo[] {
    return [];
  }
}
