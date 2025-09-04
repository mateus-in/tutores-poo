import { AvaliadorDeDesempenho } from './AvaliadorDesempenho';
import { Funcionario } from './Funcionario';

export class Gerente extends Funcionario implements AvaliadorDeDesempenho {
  constructor(nome: string, id: number, salarioBase: number, public bonus: number) {
    super(nome, id, salarioBase);
  }

  calcularSalarioFinal(): number {
    return this.salarioBase + this.bonus;
  }

  avaliar(nota: number): void {
    console.log(`Gerente ${this.nome} deu nota ${nota}.`);
  }
}
