import { Figura } from './Figura';

export class Circulo extends Figura {
  constructor(public raio: number) {
    super();
  }

  calcularArea() {
    return this.raio * this.raio * Math.PI;
  }

  calcularPerimetro() {
    return 2 * this.raio * Math.PI;
  }
}
