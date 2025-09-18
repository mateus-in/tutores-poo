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
}
