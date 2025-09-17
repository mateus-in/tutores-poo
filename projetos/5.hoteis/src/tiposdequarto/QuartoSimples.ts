import { StatusQuarto } from '../Enums/enumStatusQuarto';
import { Quarto } from './Quarto';

export class QuartoSimples extends Quarto {
  constructor(
    numero: string,
    andar: number,
    capacidade: number,
    precoDiaria: number,
    comodidades: string[] = [],
  ) {
    super(numero, andar, capacidade, precoDiaria, comodidades);
  }
  calcularCustoTotal(dias: number): number {
    return this.precoDiaria * dias;
  }

  public alterarStatus(novoStatus: StatusQuarto): void {
    throw new Error('Method not implemented.');
  }
  public estaDisponivel(): boolean {
    throw new Error('Method not implemented.');
  }
  public obterDescricao(): string {
    return this.comodidades.length > 0
      ? `Quarto Simples ${this.numero} no andar ${this.andar}, capacidade para ${
          this.capacidade
        } pessoas, com comodidades: ${this.comodidades.join(
          ', ',
        )}. Preço da diária: R$${this.precoDiaria.toFixed(2)}`
      : `Quarto Simples ${this.numero} no andar ${this.andar}, capacidade para ${
          this.capacidade
        } pessoas. Preço da diária: R$${this.precoDiaria.toFixed(2)}`;
  }
}
