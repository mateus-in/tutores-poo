import { NivelAcesso, StatusUsuario } from '../enums/usuario-enum';
import { Usuario } from './usuario-entidade';

export class Administrador extends Usuario {
  constructor(
    protected _id: string,
    public nome: string,
    public email: string,
    protected _senha: string,
    public dataRegistro: Date,
    public status: StatusUsuario,
    public permissoes: string[],
    public nivelAcesso: NivelAcesso,
  ) {
    super(_id, nome, email, _senha, dataRegistro, status);
  }

  calcularProgresso(): number {
    throw new Error('Method not implemented.');
  }
}
