import { Passageiro } from './Passageiro';
import { Voo } from './Voo';
import { StatusReserva } from './enums/StatusReserva';
import { Bagagem } from './Bagagem';
export class Reserva {
  constructor(
    public id: string,
    public passageiro: Passageiro,
    public voo: Voo,
    public numeroAssento: string,
    public status: StatusReserva,
    public bagagens: Bagagem[],
    public dataReserva: Date,
    public precoTotal: number,
  ) {}

  calcularPrecoTotal(): number {
    return 1;
  }
  adicionarBagagem(bagagem: Bagagem): boolean {
    return true;
  }
  confirmarReserva(): void {}
  cancelar(): void {}
}
