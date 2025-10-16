import { Bagagem } from './Bagagem';

export abstract class Passageiro {
  constructor(
    public id: string,
    public nome: string,
    public documento: string,
    public email: string,
    public telefone: string,
  ) {}

  abstract calcularPrecoPassagem(precoBase: number): number;
  abstract validarBagagem(bagagens: Bagagem[]): boolean;
}
