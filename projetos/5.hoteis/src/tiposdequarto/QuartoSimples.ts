import { StatusQuarto } from '../Enums/enumStatusQuarto';
import { Quarto } from './Quarto';

export class QuartoSimples extends Quarto {
  constructor(
    numero: number,
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

  public estaDisponivel(): boolean {
    if (this.status === StatusQuarto.DISPONIVEL) {
      return true;
    } else {
      return false;
    }
  }
  public obterDescricao(): string {
    const baseDescricao = super.obterDescricao();
    return `${baseDescricao} Tipo: Simples.`;
  }
}
