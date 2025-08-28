import { Funcionario } from './Funcionario';

export class Gerente extends Funcionario {
  constructor(
    public id: string,
    public nome: string,
    public salarioBase: number,
    public bonus: number,
  ) {
    super(id, nome, salarioBase);
  }

  calcularSalarioFinal(): number {
    return this.salarioBase + this.bonus;
  }
}
