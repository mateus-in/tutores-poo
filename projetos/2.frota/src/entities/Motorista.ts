import { Funcionario } from "./Funcionario";

export class Motorista extends Funcionario {
  constructor(
    public nome: string,
    public dataDeNascimento: number,
    public cpf: string,
    public endereço: string,
    public telefone: string,
    public genero: string,
    public salario: number,
    public id: number,
    public cnh: string,
    public categoria: string,
    public cargo = "Motorista",
    public setor = "Transporte"
  ) {
    super(
      nome,
      dataDeNascimento,
      cpf,
      endereço,
      telefone,
      genero,
      salario,
      cargo,
      id
    );
  }
}
