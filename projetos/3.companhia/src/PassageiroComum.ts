import { Bagagem } from "./Bagagem";
import { Passageiro } from "./Passageiro";

export class PassageiroComum implements Passageiro {
  constructor(
    public id: string,
    public nome: string,
    public documneto: string,
    public email: string,
    public telefone: string
  ) {}

  calcularPrecoPassagem(precoBase: number): number {
    return 1;
  }
  validarBagagem(bagagens: Bagagem[]): boolean {
    return true;
  }
}
