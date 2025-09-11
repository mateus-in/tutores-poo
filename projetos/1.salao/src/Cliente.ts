import { FichaTecnica } from './FichaTecnica';

export class Cliente {
  constructor(
    public_id: string,
    public_nome: string,
    public_telefone: string,
    public_email: string,
    public_fichaTecnica: FichaTecnica,
  ) {}
}
