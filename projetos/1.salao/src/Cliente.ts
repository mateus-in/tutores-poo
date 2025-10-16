import { FichaTecnica } from './FichaTecnica';

export class Cliente {
  constructor(
    public id: string,
    public nome: string,
    public cpf: string,
    public telefone: string,
    public email: string,
    public fichaTecnica: FichaTecnica
  ) {}
}
