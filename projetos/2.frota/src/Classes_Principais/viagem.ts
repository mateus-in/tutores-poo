import { StatusViagem } from './enum';
import { Motorista } from './Motorista';
import { Veiculos } from './veiculo';

export class Viagem {
  constructor(
    public id: string,
    public motorista: Motorista,
    public veiculo: Veiculos,
    public origem: string,
    public destino: string,
    public dataInicio: Date,
    public dataFim: Date,
    public quilometragemInicial: number,
    public quilometragemFinal: number,
    public status: StatusViagem,
  ) {}
  // Método para calcular a distância total da viagem
  calcularDistanciaTotal(): number {
    if (this.quilometragemFinal < this.quilometragemInicial) {
      throw new Error('Quilometragem final não pode ser menor que a inicial.');
    }
    return this.quilometragemFinal - this.quilometragemInicial;
  }
  // Método para Calcular o custo total da viagem
  calcularCustoTotal(): number {
    const distancia = this.calcularDistanciaTotal();
    const custoPorKM = this.veiculo.CalcularCustoPorKM();
    return distancia * custoPorKM;
  }

  // Método para finalizar a viagem
  finalizarViagem(quilometragemFinal: number): void {
    if (this.status === StatusViagem.Concluida) {
      throw new Error('A viagem já foi concluída.');
    }
    if (quilometragemFinal < this.quilometragemInicial) {
      throw new Error('Quilometragem final não pode ser menor que a inicial.');
    }
    this.quilometragemFinal = quilometragemFinal;
    this.status = StatusViagem.Concluida;
  }
}
