export abstract class Conteudo {
  constructor(
    private _id: string,
    public titulo: string,
    public descricao: string,
    public duracaoMinutos: number,
    public ordem: number,
  ) {}

  get id() {
    return this._id;
  }
}
