import { Passageiro } from './Passageiro';
import { Voo } from './Voo';
import { StatusReserva } from './enums/StatusReserva';
import { Bagagem } from './Bagagem';
import { PassageiroVip } from './PassageiroVip';
import { TipoBagagem } from './enums/TipoBagagem';
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
    //PASSAGEIRO VIP NAO PAGA BAGAGEM ESPECIAL
        if (this.passageiro instanceof PassageiroVip && this.bagagens[0].tipo=== TipoBagagem.BAGAGEM_ESPECIAL) {
      
  }
    for(const bagagem of this.bagagens){
    precobagagens+-bagagem.precoExtra;
    }
    this.precoTotal=this.voo.precoBase+precobagagens;
    return this.precoTotal;
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
// Método para verificar se a reserva expirou (em 24 horas),DAS REGRAS DE NEGÓCIO
verificarExpiracaodaReserva():void {
    if (this.status !==StatusReserva.PENDENTE) {
      return ;
}
 const dataLimite = new Date(this.dataReserva.getTime());
    dataLimite.setHours(dataLimite.getHours() + 24);
       const dataAtual = new Date();

    if (dataAtual > dataLimite) {
      this.status = StatusReserva.CANCELADA;
}
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
  realizarCheckIn(): void {
    if (this.status === StatusReserva.CONFIRMADA) {
      this.status = StatusReserva.CHECK_IN_REALIZADO;
    }
  }
}
