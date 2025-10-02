import { StatusQuarto } from '../Enums/enumStatusQuarto';
import { Quarto } from './Quarto';
export class suite extends Quarto {
  private _sala: boolean;
  private _varanda: boolean;
  constructor(
    numero: string,
    andar: number,
    capacidade: number,
    precoDiaria: number,
    comodidades: string[] = [],
    sala: boolean = true,
    varanda: boolean = true,
  ) {
    super(numero, andar, capacidade, precoDiaria, comodidades);
    this._sala = sala;
    this._varanda = varanda;
  }
  get sala() {
    return this._sala;
  }
  get varanda() {
    return this._varanda;
  }
  calcularCustoTotal(dias: number): number {
    const base = this.precoDiaria * dias;
    return base;
  }
  public alterarStatus(novoStatus: StatusQuarto): void {
    throw new Error('Method not implemented.');
  }
  public estaDisponivel(): boolean {
    throw new Error('Method not implemented.');
  }
  public obterDescricao(): string {
    throw new Error('Method not implemented.');
  }
}
