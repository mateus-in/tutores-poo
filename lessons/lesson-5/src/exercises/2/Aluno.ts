import { Curso } from './Curso';

export class Aluno {
  public cursosInscritos: Curso[] = [];

  constructor(public matricula: string, public nome: string) {
    // Dever de casa: Pesquisar sobre regex.
    if (!/^\d{6}$/.test(matricula)) {
      throw new Error('Matrícula inválida. Deve conter 6 dígitos.');
    }
    this.matricula = matricula;
    this.nome = nome;
  }

  inscreverEmCurso(curso: Curso): void {
    curso.matricularAluno(this);
  }
}
