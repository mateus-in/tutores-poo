interface LivroProps {
  id: string;
  titulo: string;
  autor: string;
  disponivel: boolean;
}

export class Livro {
  private _props: LivroProps;

  constructor(props: LivroProps) {
    this._props = props;
  }

  get id() {
    return this._props.id;
  }

  get titulo() {
    return this._props.titulo;
  }

  get autor() {
    return this._props.autor;
  }

  get disponivel() {
    return this._props.disponivel;
  }

  set id(id: string) {
    this._props.id = id;
  }

  set titulo(titulo: string) {
    this._props.titulo = titulo;
  }

  set autor(autor: string) {
    this._props.autor = autor;
  }

  set disponivel(disponivel: boolean) {
    this._props.disponivel = disponivel;
  }
}
