import { Carro } from './carro';
import { Van } from './van';
import { Caminhao } from './caminhao';
import { Motorista } from './Motorista';
import { ControleManutencao } from './controleManutencao';
import { TipoManutencao, CategoriaCNH, StatusVeiculos } from './enum';
import { GerenciadorViagens } from './gerenciadorDeViagem';
import { Viagem } from './viagem';

console.log('=== Teste do Sistema de Frota ===\n');

// 1. Criação de Veículos
console.log('1. Testando criação de veículos:');
const carro = new Carro('ABC-1234', 'Toyota Corolla', 2022);
const van = new Van('DEF-5678', 'Mercedes Sprinter', 2021, 40000, 10000, 15);
const caminhao = new Caminhao('GHI-9012', 'Volvo FH', 2020, 50000, 15000, 20);

console.log(`Carro: ${carro.getModelo()} - Custo por km: R$ ${carro.calcularCustoPorKm()}`);
console.log(`Van: ${van.getModelo()} - Custo por km: R$ ${van.calcularCustoPorKm()}`);
console.log(
  `Caminhão: ${caminhao.getModelo()} - Custo por km: R$ ${caminhao.calcularCustoPorKm()}\n`,
);

// 2. Criação de Motoristas
console.log('2. Testando criação de motoristas:');
const motorista1 = new Motorista(
  'M001',
  'João Silva',
  '123.456.789-00',
  CategoriaCNH.B,
  new Date('2025-12-31'),
);
const motorista2 = new Motorista(
  'M002',
  'Maria Santos',
  '987.654.321-00',
  CategoriaCNH.D,
  new Date('2024-06-30'),
);

console.log(`Motorista 1: ${motorista1.getNome()} - CNH válida: ${motorista1.cnhValida()}`);
console.log(`Motorista 2: ${motorista2.getNome()} - CNH válida: ${motorista2.cnhValida()}\n`);

// 3. Teste de Manutenção
console.log('3. Testando controle de manutenção:');
const controleManutencao = new ControleManutencao([carro, van, caminhao], 10000);

const manutencao = controleManutencao.agendarManutencao(
  caminhao,
  TipoManutencao.Preventiva,
  'Troca de óleo e filtros',
  2500,
);

console.log('Manutenção agendada:', manutencao.getResumo());
console.log(
  'Veículos com manutenção pendente:',
  controleManutencao
    .verificarManutencoesPendentes()
    .map((v) => v.getModelo())
    .join(', '),
  '\n',
);

// 4. Teste de Gerenciamento de Viagens
console.log('4. Testando gerenciamento de viagens:');
const gerenciador = new GerenciadorViagens(motorista1, motorista2, carro, van);

const viagem1 = new Viagem(
  'V001',
  motorista1,
  carro,
  'São Paulo',
  'Rio de Janeiro',
  new Date('2023-10-01T08:00:00'),
  10000,
);

console.log('Viagem criada:', viagem1.getResumo());
viagem1.iniciarViagem();
console.log('Status da viagem após início:', viagem1.getStatus());
viagem1.finalizarViagem(new Date(), 50500);
console.log('Distância percorrida:', viagem1.calcularDistanciaPercorrida(), 'km');
console.log('Custo da viagem: R$', viagem1.calcularCustoViagem().toFixed(2), '\n');

// 5. Teste de Status dos Veículos
carro.alterarStatus(StatusVeiculos.EM_Manutencao);
console.log(`Status do carro: ${carro.getStatus()}`);
carro.alterarStatus(StatusVeiculos.EM_Manutencao);
console.log(`Novo status do carro: ${carro.getStatus()}\n`);

console.log('=== Fim dos Testes - SUCESSO ===');
