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
  
    this.bagagens.push(bagagem);

    if (this.passageiro.validarBagagem(this.bagagens)) {
        this.calcularPrecoTotal();
        return true;
    }
    this.bagagens.pop();
    return false;
}
  
  confirmarReserva(): void {
       if (this.status === StatusReserva.PENDENTE) {
        this.status = StatusReserva.CONFIRMADA;
        this.calcularPrecoTotal(); // garante preço final atualizado
    }
  }
  cancelar(): void {
    if (this.status !== StatusReserva.CANCELADA) {
        this.status = StatusReserva.CANCELADA;
    } 
  }
}
