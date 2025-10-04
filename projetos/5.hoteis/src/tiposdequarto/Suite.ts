import { StatusQuarto } from '../Enums/enumStatusQuarto';
import { Quarto } from './Quarto';

export class Suite extends Quarto {
  private _sala: boolean;
  private _varanda: boolean;
  constructor(
    numero: number,
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
  public estaDisponivel(): boolean {
    if (this.status === StatusQuarto.DISPONIVEL) {
      return true;
    } else {
      return false;
    }
  }
  public obterDescricao(): string {
    const descricaoBase = super.obterDescricao();
    const descricaoVaranda = this.varanda ? 'com varanda' : 'sem varanda';
    const descricaoSala = this.sala ? 'com sala de estar' : 'sem sala de estar';
    return `${descricaoBase} Tipo: Suite — ${descricaoVaranda}, ${descricaoSala}.`;
  }
}
