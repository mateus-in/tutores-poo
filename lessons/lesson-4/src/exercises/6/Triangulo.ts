import { Figura } from './Figura';

export class Triangulo extends Figura {
  constructor(
    public base: number,
    public altura: number,
    public ladoA: number,
    public ladoC: number,
  ) {
    super();
  }

  calcularArea() {
    return (this.base * this.altura) / 2;
  }

  calcularPerimetro() {
    return this.base + this.ladoA + this.ladoC;
  }
}
