import { Carro } from './carro';
import { Motorista } from './Motorista';
import { Veiculo } from './veiculo';
import { Viagem } from './viagem';

export class GerenciadorViagens {
  criarViagem(
    arg0: string,
    motorista1: Motorista,
    carro: Carro,
    arg3: string,
    arg4: string,
    arg5: Date,
    arg6: number,
  ) {
    throw new Error('Method not implemented.');
  }
  public motorista1: Motorista;
  public motorista2: Motorista;
  public carro1: Veiculo;
  public van1: Veiculo;

  constructor(motorista1: Motorista, motorista2: Motorista, carro1: Veiculo, van1: Veiculo) {
    this.motorista1 = motorista1;
    this.motorista2 = motorista2;
    this.carro1 = carro1;
    this.van1 = van1;
  }

  criarViagens(
    motorista1?: Motorista,
    carro?: Carro,
    p0?: string,
    p1?: string,
    p2?: Date,
    p3?: number,
  ): Viagem[] {
    const viagem1 = new Viagem(
      'V1',
      this.motorista1,
      this.carro1,
      'São Paulo',
      'Rio de Janeiro',
      new Date('2023-10-01T08:00:00'),
      10000,
    );

    const viagem2 = new Viagem(
      'V2',
      this.motorista2,
      this.van1,
      'Belo Horizonte',
      'Salvador',
      new Date('2023-11-15T09:00:00'),
      5000,
    );

    return [viagem1, viagem2];
  }
}
