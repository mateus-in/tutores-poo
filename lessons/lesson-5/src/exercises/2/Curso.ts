import { Aluno } from './Aluno';

export class Curso {
  public alunosMatriculados: Aluno[] = [];

  constructor(public codigo: string, public nome: string) {}

  matricularAluno(aluno: Aluno): void {
    const alunoJaMatriculado = this.alunosMatriculados.some((a) => a.matricula === aluno.matricula);
    const cursoJaInscrito = aluno.cursosInscritos.some((c) => c.codigo === this.codigo);

    if (alunoJaMatriculado && cursoJaInscrito) {
      console.log(`Erro: Aluno ${aluno.nome} já está matriculado no curso ${this.nome}.`);
    } else {
      this.alunosMatriculados.push(aluno);
      aluno.cursosInscritos.push(this);
      console.log(`Aluno ${aluno.nome} matriculado no curso ${this.nome} com sucesso.`);
    }
  }
}
