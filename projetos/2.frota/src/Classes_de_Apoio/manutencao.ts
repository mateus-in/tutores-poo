import { TipoManutencao } from '../Classes_Principais/enum';
import { Veiculos } from '../Classes_Principais/veiculo';

export class Manutencao {
  // Registra manutenções realizadas nos veículos.
  constructor(
    public id: string,
    public veiculo: Veiculos,
    public tipo: TipoManutencao,
    public dataManutencao: Date,
    public custo: number,
    public descricao: string,
    public quilometragem: number,
  ) {}

  calcularProximaManutencao(): Date {
    // Lógica para calcular a próxima data de manutenção com base no tipo e na quilometragem
    const intervaloDias = this.tipo === TipoManutencao.Preventiva ? 180 : 365;
    const proximaData = new Date(this.dataManutencao);
    proximaData.setDate(proximaData.getDate() + intervaloDias);
    return proximaData;
  }
  atualizarCustoVeiculo(): void {
    // Atualiza o custo de manutenção do veículo associado
    this.veiculo.custoManutenção += this.custo;
  }
}
