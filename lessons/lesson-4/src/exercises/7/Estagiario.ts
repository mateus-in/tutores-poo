import { Funcionario } from './Funcionario';

export class Estagiario extends Funcionario {
  constructor(
    public id: string,
    public nome: string,
    public salarioBase: number,
    public valorBolsaAuxilio: number,
  ) {
    super(id, nome, salarioBase);
  }

  calcularSalarioFinal(): number {
    return this.salarioBase + this.valorBolsaAuxilio;
  }
}
