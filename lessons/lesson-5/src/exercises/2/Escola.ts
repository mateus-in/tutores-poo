import { Aluno } from './Aluno';
import { Curso } from './Curso';

export class Escola {
  private cursos: Curso[] = [];
  private alunos: Aluno[] = [];

  adicionarCurso(curso: Curso): void {
    this.cursos.push(curso);
  }
  adicionarAluno(aluno: Aluno): void {
    this.alunos.push(aluno);
  }

  procurarCursoPorCodigo(codigo: string): Curso | null {
    return this.cursos.find((c) => c.codigo === codigo) || null;
  }
}
