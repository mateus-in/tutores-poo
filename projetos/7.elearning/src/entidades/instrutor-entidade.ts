import { StatusUsuario } from '../enums/usuario-enum';
import { Curso } from './curso-entidade';
import { Usuario } from './usuario-entidade';

export class Instrutor extends Usuario {
  constructor(
    protected _id: string,
    public nome: string,
    public email: string,
    protected _senha: string,
    public dataRegistro: Date,
    public status: StatusUsuario,
    public especialidades: string[],
    public cursosMinistrados: Curso[],
  ) {
    super(_id, nome, email, _senha, dataRegistro, status);
  }

  calcularProgresso(): number {
    throw new Error('Method not implemented.');
  }
}
