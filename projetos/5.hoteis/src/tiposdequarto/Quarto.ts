import { StatusQuarto } from '../Enums/enumStatusQuarto';

export abstract class Quarto {
  public numero: number;
  public andar: number;
  public capacidade: number;
  public precoDiaria: number;
  public status: StatusQuarto;
  public comodidades: string[];

  constructor(
    numero: number,
    andar: number,
    capacidade: number,
    precoDiaria: number,
    comodidades: string[],
  ) {
    this.numero = numero;
    this.andar = andar;
    this.capacidade = capacidade;
    this.precoDiaria = precoDiaria;
    this.comodidades = comodidades;
    this.status = StatusQuarto.DISPONIVEL;
  }

  public abstract calcularCustoTotal(dias: number): number;

  public alterarStatus(novoStatus: StatusQuarto): void {
    this.status = novoStatus;
  }

  public estaDisponivel(): boolean {
    return this.status === StatusQuarto.DISPONIVEL;
  }

  public obterDescricao(): string {
    const listaComodidades = this.comodidades.length > 0 ? this.comodidades.join(', ') : 'Nenhuma';

    return `Quarto ${this.numero} (andar ${this.andar}) — capacidade: ${
      this.capacidade
    } pessoa(s), diária: R$${this.precoDiaria.toFixed(2)}. Status: ${
      this.status
    }. Comodidades: ${listaComodidades}.`;
  }
}
