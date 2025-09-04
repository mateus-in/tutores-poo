import { Aluno } from './Aluno';
import { Curso } from './Curso';
import { Escola } from './Escola';

console.log('\n--- Exercício 13: Cursos e Alunos ---');
const escola = new Escola();

const cursoPOO = new Curso('POO101', 'Programação Orientada a Objetos');
const cursoBD = new Curso('BD202', 'Banco de Dados Relacionais');

let aluno1: Aluno | null = null;

try {
  aluno1 = new Aluno('123456', 'Lucas');
  escola.adicionarAluno(aluno1);
} catch (error: any) {
  console.error(error.message);
}

let aluno2: Aluno | undefined;
try {
  aluno2 = new Aluno('789012', 'Carla');
  escola.adicionarAluno(aluno2);
} catch (error: any) {
  console.error(error.message);
}

escola.adicionarCurso(cursoPOO);
escola.adicionarCurso(cursoBD);

if (aluno1 && aluno2) {
  aluno1.inscreverEmCurso(cursoPOO);
  aluno1.inscreverEmCurso(cursoBD);
  aluno2.inscreverEmCurso(cursoPOO);
  aluno1.inscreverEmCurso(cursoPOO); // Deve falhar
}

console.log(
  `\nCursos inscritos por ${aluno1?.nome}:`,
  aluno1?.cursosInscritos.map((c) => c.nome),
);

console.log(
  `Alunos matriculados em ${cursoPOO.nome}:`,
  cursoPOO.alunosMatriculados.map((a) => a.nome),
);
