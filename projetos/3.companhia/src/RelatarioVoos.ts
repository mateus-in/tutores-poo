import { StatusAssento } from './enums/StatusAssento';
import { Voo } from './Voo';

export class RelatarioVoos {
  constructor(public voos: Voo[]) {}

  calcularReceitaTotal(): number {
  
      let receitaTotal = 0;
        for (const voo of this.voos) {
            for (const reserva of voo.reservas) {
                receitaTotal += reserva.precoTotal; 
            }
        }
        return receitaTotal;
  }

  calcularTaxaOcupacao(): number {
      let totalAssentos = 0;
        let totalReservados = 0;

        for (const voo of this.voos) {
            totalAssentos += voo.assentos.size; 
            for (const status of voo.assentos.values()) {
                if (status === StatusAssento.RESERVADO) {
                    totalReservados++;
                }
              }
            }
             return totalAssentos > 0 ? (totalReservados / totalAssentos) * 100 : 0;
          }
  listarVoosMaisPopulares(): Voo[] {
     const voosOrdenados = [...this.voos].sort((a, b) => b.reservas.length - a.reservas.length);
        return voosOrdenados;
  }
}
