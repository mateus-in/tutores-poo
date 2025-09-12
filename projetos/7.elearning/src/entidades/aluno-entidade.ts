import { StatusUsuario } from '../enums/usuario-enum';
import { Certificado } from './certificado-entidade';
import { Inscricao } from './inscricao-entidade';
import { Usuario } from './usuario-entidade';

export class Aluno extends Usuario {
  constructor(
    protected _id: string,
    public nome: string,
    public email: string,
    protected _senha: string,
    public dataRegistro: Date,
    public status: StatusUsuario,
    public cursosInscritos: Inscricao[],
    public certificados: Certificado[],
  ) {
    super(_id, nome, email, _senha, dataRegistro, status);
  }

  calcularProgresso(): number {
    // TO DO
    return 1;
  }
}
