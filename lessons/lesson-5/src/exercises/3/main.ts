import { Funcionario } from './Funcionario';
import { Gerente } from './Gerente';
import { SistemaRH } from './SistemaRH';

console.log('\n--- Exercício 12: Avaliação de Desempenho ---');
const sistemaRH = new SistemaRH();
const gerenteA = new Gerente('João', 1, 8000, 2000);
const desenvolvedorB = new Funcionario('Maria', 2, 5000);
const estagiarioC = new Funcionario('Pedro', 3, 1500);

sistemaRH.adicionarFuncionario(gerenteA);
sistemaRH.adicionarFuncionario(desenvolvedorB);
sistemaRH.adicionarFuncionario(estagiarioC);

console.log('\n--- Realizando Avaliações ---');
sistemaRH.realizarAvaliacao(gerenteA, desenvolvedorB, 5);
sistemaRH.realizarAvaliacao(gerenteA, estagiarioC, 4);
sistemaRH.realizarAvaliacao(gerenteA, desenvolvedorB, 4);

console.log('\n--- Médias de Avaliação ---');
console.log(
  `Média de avaliação de ${desenvolvedorB.nome}: ${desenvolvedorB
    .obterMediaAvaliacoes()
    .toFixed(2)}`,
);
console.log(
  `Média de avaliação de ${estagiarioC.nome}: ${estagiarioC.obterMediaAvaliacoes().toFixed(2)}`,
);
