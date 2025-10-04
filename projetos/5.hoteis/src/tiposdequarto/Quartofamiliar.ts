import { Quarto } from './Quarto';
import { StatusQuarto } from '../Enums/enumStatusQuarto';

export class QuartoFamiliar extends Quarto {
  private _bercos: number;
  private _kitchenette: boolean;
  private _taxaBerco: number = 30;

  constructor(
    numero: number,
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

  public estaDisponivel(): boolean {
    if (this.status === StatusQuarto.DISPONIVEL) {
      return true;
    } else {
      return false;
    }
  }
  public obterDescricao(): string {
    const basedescricao = super.obterDescricao();
    const descricaoBercos = `${this.bercos} berço(s)`;
    const descricaoKitchenette = this.kitchenette ? 'com kitchenette' : 'sem kitchenette';
    return `${basedescricao} Tipo: Familiar — ${descricaoBercos}, ${descricaoKitchenette}.`;
  }
}
