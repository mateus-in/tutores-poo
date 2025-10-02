import { Quarto } from './Quarto';
import { StatusQuarto } from '../Enums/enumStatusQuarto';

export class QuartoFamiliar extends Quarto {
  private _bercos: number;
  private _kitchenette: boolean;
  private _taxaBerco: number = 30;

  constructor(
    numero: string,
    andar: number,
    capacidade: number,
    precoDiaria: number,
    comodidades: string[] = [],
    bercos: number = 0,
    kitchenette: boolean,
  ) {
    super(numero, andar, capacidade, precoDiaria, comodidades);
    this._bercos = bercos;
    this._kitchenette = kitchenette;
  }

  get bercos() {
    return this._bercos;
  }

  get kitchenette() {
    return this._kitchenette;
  }

  calcularCustoTotal(dias: number): number {
    const base = this.precoDiaria * dias;
    const custoBercos = this._bercos * this._taxaBerco * dias;
    return base + custoBercos;
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
