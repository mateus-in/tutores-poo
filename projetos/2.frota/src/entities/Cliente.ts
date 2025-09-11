import { Pessoa } from "./Pessoa";

export class Cliente extends Pessoa {
  constructor(
    public nome: string,
    public dataDeNascimento: number,
    public cpf: string,
    public endereço: string,
    public telefone: string,
    public genero: string,
    public rendaMensal: number,
    public profissao: string,
    public id: number,
    public cnh: boolean
  ) {
    super(nome, dataDeNascimento, cpf, endereço, telefone, genero);
  }
}
