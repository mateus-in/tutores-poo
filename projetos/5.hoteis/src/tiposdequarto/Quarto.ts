import { StatusQuarto } from '../Enums/enumStatusQuarto';

export abstract class Quarto {
  protected numero: string;
  protected andar: number;
  protected capacidade: number;
  protected precoDiaria: number;
  protected status: StatusQuarto;
  protected comodidades: string[];

  constructor(
    numero: string,
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

  alterarStatus(novoStatus: StatusQuarto): void {
    this.status = novoStatus;
  }

  public abstract estaDisponivel(): boolean;

  public abstract obterDescricao(): string;
}
