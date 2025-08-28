import { Livro } from './Livro';

interface MembroProps {
  id: string;
  nome: string;
  livrosEmprestados: Livro[];
}

export class Membro {
  private _props: MembroProps;

  constructor(props: MembroProps) {
    this._props = props;
  }

  get id() {
    return this._props.id;
  }

  get nome() {
    return this._props.nome;
  }

  get livrosEmprestados() {
    return this._props.livrosEmprestados;
  }

  set id(id: string) {
    this._props.id = id;
  }

  set nome(nome: string) {
    this._props.nome = nome;
  }

  set livrosEmprestados(livrosEmprestados: Livro[]) {
    this._props.livrosEmprestados = livrosEmprestados;
  }
}
