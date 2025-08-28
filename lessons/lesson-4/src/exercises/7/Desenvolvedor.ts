import { Funcionario } from './Funcionario';

export class Desenvolvedor extends Funcionario {
  constructor(
    public id: string,
    public nome: string,
    public salarioBase: number,
    public horasExtras: number,
    public valorHoraExtra: number,
  ) {
    super(id, nome, salarioBase);
  }

  calcularSalarioFinal(): number {
    return this.salarioBase + this.horasExtras * this.valorHoraExtra;
  }
}
