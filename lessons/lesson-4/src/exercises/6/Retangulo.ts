import { Figura } from './Figura';

export class Retangulo extends Figura {
  constructor(public largura: number, public altura: number) {
    super();
  }

  calcularArea() {
    return this.largura * this.altura;
  }

  calcularPerimetro() {
    return 2 * (this.largura + this.altura);
  }
}
