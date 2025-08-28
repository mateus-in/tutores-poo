export class Funcionario {
  constructor(public id: string, public nome: string, public salarioBase: number) {}

  calcularSalarioFinal(): number {
    return this.salarioBase;
  }
}
