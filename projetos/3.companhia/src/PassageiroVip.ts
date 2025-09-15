import { Bagagem } from './Bagagem';
import { Passageiro } from './Passageiro';

export class PassageiroVip extends Passageiro {
  constructor(
    public id: string,
    public nome: string,
    public documento: string,
    public email: string,
    public telefone: string,
    protected numerocartao: string,
  ) {
    super(id, nome, documento, email, telefone);
  }

  beneficios(): string {
    return 'Acesso a sala VIP, Embarque prioritário, Maior franquia de bagagem';
  }

  calcularPrecoPassagem(precoBase: number): number {
    return 1;
  }
  validarBagagem(bagagens: Bagagem[]): boolean {
    return true;
  }
}
