import { Pessoa } from "./Pessoa";

export class Funcionario extends Pessoa {
  constructor(
    public nome: string,
    public dataDeNascimento: number,
    public cpf: string,
    public endereço: string,
    public telefone: string,
    public genero: string,
    public salario: number,
    public cargo: string,
    public id: number
  ) {
    super(nome, dataDeNascimento, cpf, endereço, telefone, genero);
  }
}
