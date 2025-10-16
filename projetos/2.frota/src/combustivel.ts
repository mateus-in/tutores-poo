import { TipoCombustivel, PrecoCombustivel } from './enum';

export class Combustivel {
  private tipo: TipoCombustivel;
  private precoPorLitro: PrecoCombustivel;
  private quantidadeLitros: number;
  private dataUltimoAbastecimento: Date | null;

  constructor(tipo: string, precoPorLitro: number) {
    this.tipo = TipoCombustivel[tipo as keyof typeof TipoCombustivel];
    this.precoPorLitro = precoPorLitro;
    this.quantidadeLitros = 0;
    this.dataUltimoAbastecimento = null;
  }

  public abastecer(litros: number): void {
    this.quantidadeLitros += litros;
    this.dataUltimoAbastecimento = new Date();
  }
  public calcularCusto(litros: number): number {
    return litros * this.precoPorLitro;
  }
  public getTipoCombustivel(): TipoCombustivel {
    return this.tipo;
  }
  public getPrecoPorLitro(): PrecoCombustivel {
    return this.precoPorLitro;
  }
  public getQuantidadeLitros(): number {
    return this.quantidadeLitros;
  }
  public getDataUltimoAbastecimento(): Date | null {
    return this.dataUltimoAbastecimento;
  }
}
