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
    public precoExtra:number,
  ) {}

  calcularPrecoTotal(): number {
    let precobagagens=0;
    for(const bagagem of this.bagagens){
    precobagagens+-bagagem.precoExtra;
    }
    this.precoTotal=this.voo.precoBase+precobagagens;
    return this.precoTotal
  } 
  adicionarBagagem(bagagem: Bagagem): boolean {
    return true;
  }
  confirmarReserva(): void {}
  cancelar(): void {}
}
