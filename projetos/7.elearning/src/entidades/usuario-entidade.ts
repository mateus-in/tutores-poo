import { StatusUsuario } from '../enums/usuario-enum';
import { ParametrosAtualizarPerfil, ParametrosLogin } from '../interfaces/usuario-interface';

export abstract class Usuario {
  private _tentativasLogin: number = 0;

  constructor(
    protected _id: string,
    public nome: string,
    public email: string,
    protected _senha: string,
    public dataRegistro: Date,
    public status: StatusUsuario,
  ) {}

  get id() {
    return this._id;
  }

  abstract calcularProgresso(): number;

  login({ email, senha }: ParametrosLogin): boolean {
    if (this._tentativasLogin >= 3) {
      throw new Error('Limite de tentativas excedido');
    }

    if (this.email !== email) {
      this._tentativasLogin++;
      throw new Error('Credenciais inválidas');
    }

    if (this._senha !== senha) {
      this._tentativasLogin++;
      throw new Error('Credenciais inválidas');
    }

    return true;
  }

  atualizarPerfil({ nome, email }: ParametrosAtualizarPerfil): void {
    this.nome = nome;
    this.email = email;
  }
}
