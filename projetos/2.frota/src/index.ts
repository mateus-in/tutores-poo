import { Caminhao } from './Classes_Principais/caminhao';
import { TipoManutencao } from './Classes_Principais/enum';
import { ControleManutencao } from './Classes_Principais/controleManutencao';

const caminhao1 = new Caminhao('AAA-1111', 'Volvo FH', 2020, 105000, 30000, 20);
const caminhao2 = new Caminhao('BBB-2222', 'Mercedes Axor', 2022, 90000, 22000, 18);

const controle = new ControleManutencao([caminhao1, caminhao2], 10000);

// Verificar veículos com manutenção pendente
const pendentes = controle.verificarManutencoesPendentes();
console.log(
  'Manutenções pendentes:',
  pendentes.map((v) => v.getModelo()),
);

// Agendar manutenção para um veículo
const manutencao = controle.agendarManutencao(
  caminhao1,
  TipoManutencao.Preventiva,
  'Troca de óleo',
  2000,
);
console.log('Manutenção agendada:', manutencao.getResumo());

// Calcular custo total do ano atual
const custo2025 = controle.calcularCustoManutencaoAnual(2025);
console.log('Custo total de manutenção em 2025: R$', custo2025);
