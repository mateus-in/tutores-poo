console.log('3.companhia');
import { CompanhiaAerea } from './CompanhiaAerea';
import { PassageiroComum } from './PassageiroComum';
import { PassageiroVip } from './PassageiroVip';
import { PassageiroCrianca } from './PassageiroCrianca';
import { Passageiro } from './Passageiro';
import { Voo } from './Voo';
import { Reserva } from './Reserva';
import { Aeronave } from './Aeronave';
import { RelatarioVoos } from './RelatarioVoos';
import { Bagagem } from './Bagagem';
import { TipoBagagem } from './enums/TipoBagagem';
import { BeneficiosEnum } from './enums/BeneficiosEnum';
import { EnumPassageiroVip } from './enums/EnumPassageiroVip';
import { StatusAeronave } from './enums/StatusAeronave';
import { StatusAssento } from './enums/StatusAssento';
import { StatusReserva } from './enums/StatusReserva';

//TESTES DE USO
//teste classes pasageiros
const passageiro1 = new PassageiroComum(
  '1',
  'João Silva',
  '12345678900',
  'passageirocomum1@email.com',
  '11 91234-56789',
);
//bagagem correta
const bagagem1 = new Bagagem('b1', TipoBagagem.BAGAGEM_MAO, 8, '50cmx20cm', 0);
const bagagem2 = new Bagagem('b2', TipoBagagem.BAGAGEM_DESPACHADA, 20, '70cmx40cm', 0);
const bagagens = [bagagem1, bagagem2];

console.log(passageiro1.validarBagagem(bagagens)); // true
console.log(
  `Preço da passagem para passageiro comum: R$ ${passageiro1
    .calcularPrecoPassagem(500)
    .toFixed(2)}`,
); // R$ 500.00
//bagagem incorreta
const bagagem3 = new Bagagem('b3', TipoBagagem.BAGAGEM_MAO, 8, '50cmx20cm', 0);
const bagagem4 = new Bagagem('b4', TipoBagagem.BAGAGEM_MAO, 10, '55cmx25cm', 0);
//TESTAR DEPOIS COM A BAGAGEM DESPACHADA
const bagagensIncorretas = [bagagem3, bagagem4];
console.log(passageiro1.validarBagagem(bagagensIncorretas)); // false
const bagagem5 = new Bagagem('b5', TipoBagagem.BAGAGEM_ESPECIAL, 35, '80cmx50cm', 0);
const bagagensIncorretas2 = [bagagem5];
console.log(passageiro1.validarBagagem(bagagensIncorretas2)); // false
//teste passageiro crianca
const passageiro2 = new PassageiroCrianca(
  '2',
  'Maria Silva',
  '98765432100',
  ' @email.com',
  '11 99876-54321',
  8,
  'João Silva',
);
//EU FIZ UMA MODIFICAÇÃO AQUI NO CÓDIGO DA CLASSE PASSAGEIRO CRIANÇA,DEVE RETORNAR METADE DO PREÇOPARA CRIANÇAS COM MENOS DE 12 ANOS ,O RESTO TEM QUE RETRORNAR O PREÇO CHEIO
console.log(
  `Preço da passagem para passageiro criança: R$ ${passageiro2
    .calcularPrecoPassagem(500)
    .toFixed(2)}`,
); // R$ 250.00
//bagagem correta
const bagagem6 = new Bagagem('b6', TipoBagagem.BAGAGEM_MAO, 4, '50cmx20cm', 0);
const bagagem7 = new Bagagem('b7', TipoBagagem.BAGAGEM_DESPACHADA, 20, '70cmx40cm', 0);
const bagagensCrianca = [bagagem6, bagagem7];
console.log(passageiro2.validarBagagem(bagagensCrianca)); // true
//bagagem incorreta
const bagagem8 = new Bagagem('b8', TipoBagagem.BAGAGEM_MAO, 8, '50cmx20cm', 0);
const bagagem9 = new Bagagem('b9', TipoBagagem.BAGAGEM_MAO, 10, '55cmx25cm', 0);
const bagagensCriancaIncorreta = [bagagem8, bagagem9];
console.log(passageiro2.validarBagagem(bagagensCriancaIncorreta)); // false
const bagagem10 = new Bagagem('b10', TipoBagagem.BAGAGEM_ESPECIAL, 35, '80cmx50cm', 0);
const bagagensCriancaIncorreta2 = [bagagem10];
console.log(passageiro2.validarBagagem(bagagensCriancaIncorreta2)); // false
const passageiro3 = new PassageiroCrianca(
  '13',
  'Ana Souza',
  '11223344556',
  'ana.souza@email.com',
  '11 91234-56789',
  10,
  'Maria Souza',
);
console.log(
  `Preço da passagem para passageiro criança: R$ ${passageiro3
    .calcularPrecoPassagem(600)
    .toFixed(2)}`,
); // R$ 300.00

//teste Aeronave
const aeronave1 = new Aeronave('PR-ABC', 'Boeing 737', 20, StatusAeronave.DISPONIVEL);
console.log(`Aeronave disponível: ${aeronave1.estarDisponivel()}`); // true
aeronave1.alterarStatus(StatusAeronave.MANUTENCAO);
console.log(`Aeronave disponível: ${aeronave1.estarDisponivel()}`); // false
aeronave1.alterarStatus(StatusAeronave.INATIVA);
//teste voo
// Criar o mapa de assentos ANTES de criar o voo
function criarAssentosVoo(): Map<string, StatusAssento> {
  const mapa = new Map<string, StatusAssento>();
  for (let i = 1; i <= 20; i++) {
    mapa.set(i.toString(), StatusAssento.DISPONIVEL);
  }
  return mapa;
}

const voo1 = new Voo(
  'Voo 101',
  'São Paulo',
  'Rio de Janeiro',
  new Date('2023-10-01T08:00:00'),
  new Date('2023-10-01T09:00:00'),
  aeronave1,
  300,
  criarAssentosVoo(),
  [],
);
//declarar voo como disponivel e nao disponivel
console.log(`Voo pode decolar: ${voo1.decolarvoo()}`); // false
aeronave1.alterarStatus(StatusAeronave.DISPONIVEL);
console.log(`Voo pode decolar: ${voo1.decolarvoo()}`); // true
console.log(`Voo disponível: ${voo1.verificarDisponibilidade()}`); // 20
aeronave1.alterarStatus(StatusAeronave.INATIVA);
console.log(`Voo pode decolar: ${voo1.decolarvoo()}`); // false
//reservar asentos e listar assentos disponiveis
aeronave1.alterarStatus(StatusAeronave.DISPONIVEL);
// assentosVoo1 já foi criado e preenchido acima
// Reservar assentos apenas via reservas
// Após criar as reservas, reservar os assentos correspondentes
// calcular receita total

const reserva1 = new Reserva('R1', passageiro2, voo1, '1', StatusReserva.CONFIRMADA, [], new Date(), 250, 0);
const reserva3 = new Reserva('R2', passageiro3, voo1, '2', StatusReserva.CONFIRMADA, [], new Date(), 300, 0);
voo1.reservarAssento('1');
voo1.reservarAssento('2');
const reservas = [reserva1, reserva3];
const receitaTotal = reservas.reduce((total, reserva) => total + reserva.precoTotal, 0);
console.log(`Receita total: R$ ${receitaTotal.toFixed(2)}`); // R$ 550.00

// teste relatorio de voos

const voo3 = new Voo(
  'Voo 203',
  'São Paulo',
  'Rio de Janeiro',
  new Date('2023-10-02T08:00:00'),
  new Date('2023-10-02T09:00:00'),
  aeronave1,
  300,
  criarAssentosVoo(),
  [],
);
voo3.reservarAssento('1');
const voo4 = new Voo(
  'Voo 204',
  'São Paulo',
  'Rio de Janeiro',
  new Date('2023-10-02T08:00:00'),
  new Date('2023-10-02T09:00:00'),
  aeronave1,
  300,
  criarAssentosVoo(),
  [],
);
voo4.reservarAssento('1');

// Adicionando reservas confirmadas aos voos

const reservaVoo1A = new Reserva('R1', passageiro2, voo1, '1', StatusReserva.CONFIRMADA, [], new Date(), 250, 0);
const reservaVoo1B = new Reserva('R2', passageiro3, voo1, '2', StatusReserva.CONFIRMADA, [], new Date(), 300, 0);
voo1.reservas.push(reservaVoo1A, reservaVoo1B);

const reservaVoo3A = new Reserva('R3', passageiro1, voo3, '1', StatusReserva.CONFIRMADA, [], new Date(), 200, 0);
voo3.reservarAssento('1');
voo3.reservas.push(reservaVoo3A);

const reservaVoo4A = new Reserva('R4', passageiro2, voo4, '1', StatusReserva.CONFIRMADA, [], new Date(), 180, 0);
voo4.reservarAssento('1');
voo4.reservas.push(reservaVoo4A);

const relatario = new RelatarioVoos([voo1, voo3, voo4]);
console.log(`Receita total dos voos: R$ ${relatario.calcularReceitaTotal().toFixed(2)}`); // R$ 930.00 (reservas adicionadas aos voos)
// A taxa de ocupação so realizei um teste simples,pois depende do número de assentos e reservas
console.log(`Taxa de ocupação dos voos: ${relatario.calcularTaxaOcupacao().toFixed(2)}%`); 
const voosPopulares = relatario.listarVoosMaisPopulares();
console.log('Voos mais populares (por número de reservas):');
voosPopulares.forEach((voo, index) => {
  console.log(` ${index + 1}. ${voo.numeroVoo} - ${voo.reservas.length} reservas`);
}); // Voo 1 - 2 reservas

//teste companhia aerea
const companhiaAerea = new CompanhiaAerea('Companhia X');
companhiaAerea.cadastrarVoo(voo1);
//nao vai ter um tipo de  retorno especifico .
companhiaAerea.buscarVoos('São Paulo', 'Rio de Janeiro', new Date('2023-10-01T08:00:00'));
//fazer reserva
const reservaCompanhia = new Reserva('R5', passageiro1, voo1, '3', StatusReserva.PENDENTE, [], new Date(), 300, 0);
const sucessoReserva = companhiaAerea.fazerReserva(reservaCompanhia);
console.log(`Reserva bem-sucedida: ${sucessoReserva}`); // true
const reservaCompanhia2 = new Reserva('R6', passageiro1, voo4, '4', StatusReserva.PENDENTE, [], new Date(), 300, 0);
const reservaInvalida = new Reserva('R6', passageiro1, new Voo('VooInexistente', 'A', 'B', new Date(), new Date(), aeronave1, 100, criarAssentosVoo(), []), '1', StatusReserva.PENDENTE, [], new Date(), 100, 0);
const resultado1 = companhiaAerea.fazerReserva(reservaInvalida);
console.log(`Reserva para voo inexistente: ${resultado1}`); // Deve imprimir: false
// Supondo que todos os assentos do voo1 já estejam reservados:
for (let i = 1; i <= 20; i++) {
  voo1.reservarAssento(i.toString());
}
const reservaSemAssento = new Reserva('R7', passageiro2, voo1, '21', StatusReserva.CONFIRMADA, [], new Date(), 100, 0);
const resultado2 = companhiaAerea.fazerReserva(reservaSemAssento);
console.log(`Reserva sem assentos disponíveis: ${resultado2}`); // Deve imprimir: false

if (resultado2) {
  //realizar check-in
  const checkInSucesso = companhiaAerea.realizarCheckIn('reservaCompanhia');
  console.log(`Check-in bem-sucedido: ${checkInSucesso}`); // true
  //testar check-in falha
  reservaSemAssento.status = StatusReserva.PENDENTE;
  const checkInFalhaStatus = companhiaAerea.realizarCheckIn('reservaCompanhia');
  console.log(`Check-in bem-sucedido: ${checkInFalhaStatus}`); // false
  const checkInFalha = companhiaAerea.realizarCheckIn('R999');
  console.log(`Check-in bem-sucedido: ${checkInFalha}`); // false
  //cancelar reserva
  const cancelamentoSucesso = companhiaAerea.cancelarReserva('R5');
  console.log(`Cancelamento bem-sucedido: ${cancelamentoSucesso}`); // true
} //testar cancelamento falha
const cancelamentoFalha = companhiaAerea.cancelarReserva('R999');
console.log(`Cancelamento bem-sucedido: ${cancelamentoFalha}`); // false





//teste passageiroVip
const passageiro4 = new PassageiroVip(
  '3',
  'Carlos Pereira',
  '55566677788',
  '@email.com',
  '11 93456-78901',
  '1234567',
);
// exibir beneficios do passageiro vip
console.log(`Benefícios do passageiro VIP: ${passageiro4.listarbeneficios().join(', ')}`);
console.log(`Detalhes da sala VIP: ${passageiro4.listarexclusividadessalavip().join(', ')}`);
console.log(`Preço da passagem para passageiro VIP: R$ ${passageiro4.calcularPrecoPassagem(500)}`); // R$ 450.00
//bagagem correta
const bagagem11 = new Bagagem('b11', TipoBagagem.BAGAGEM_MAO, 10, '50cmx20cm', 0);
const bagagem12 = new Bagagem('b12', TipoBagagem.BAGAGEM_DESPACHADA, 30, '70cmx40cm', 0);
const bagagem13 = new Bagagem('b13', TipoBagagem.BAGAGEM_DESPACHADA, 25, '70cmx40cm', 0);
const bagagem14 = new Bagagem('b14', TipoBagagem.BAGAGEM_ESPECIAL, 28, '80cmx50cm', 0);
const bagagensVip = [bagagem11, bagagem12, bagagem13, bagagem14];
console.log(passageiro4.validarBagagem(bagagensVip)); // true
//bagagem incorreta
const bagagem15 = new Bagagem('b15', TipoBagagem.BAGAGEM_MAO, 12, '50cmx20cm', 0); // peso excedido
const bagagem16 = new Bagagem('b16', TipoBagagem.BAGAGEM_DESPACHADA, 30, '70cmx40cm', 0);
const bagagem17 = new Bagagem('b17', TipoBagagem.BAGAGEM_ESPECIAL, 28, '80cmx50cm', 0);
const bagagensVipIncorreta = [bagagem15, bagagem16, bagagem17];
console.log(passageiro4.validarBagagem(bagagensVipIncorreta)); // false

//teste reserva
const aeronave2 = new Aeronave('A2', 'Boeing 737', 180, StatusAeronave.DISPONIVEL);
const voo2 = new Voo(
  'V2',
  'São Paulo',
  'Rio de Janeiro',
  new Date('2024-12-01T10:00:00'),
  new Date('2024-12-01T11:00:00'),
  aeronave2,
  400,
  new Map<string, StatusAssento>(),
  [],
);
const reserva2 = new Reserva(
  ' id2',
  passageiro1,
  voo2,
  '12B',
  StatusReserva.PENDENTE,
  [],
  new Date(),
  0,
  0,
);
console.log(`Status inicial da reserva: ${reserva2.status}`); // PENDENTE
// Adiciona bagagem válida
const bagagemReserva2 = new Bagagem('br2', TipoBagagem.BAGAGEM_MAO, 8, '50cmx20cm', 0);
reserva2.adicionarBagagem(bagagemReserva2);
const bagagemReserva3 = new Bagagem('br3', TipoBagagem.BAGAGEM_DESPACHADA, 20, '70cmx40cm', 0);
reserva2.adicionarBagagem(bagagemReserva3);
console.log(`Preço total após adicionar bagagens: R$ ${reserva2.calcularPrecoTotal()}`); // 400
// Tenta adicionar bagagem inválida
const bagagemReservaInvalida = new Bagagem('br4', TipoBagagem.BAGAGEM_MAO, 15, '50cmx20cm', 0);
const adicionouInvalida = reserva2.adicionarBagagem(bagagemReservaInvalida);
console.log(`Adicionou bagagem inválida? ${adicionouInvalida}`); // false
console.log(`Número de bagagens na reserva: ${reserva2.bagagens.length}`);

reserva2.calcularPrecoTotal(); // 400
reserva2.confirmarReserva();
console.log(`Status após confirmação: ${reserva2.status}`); // VAI APARECER UM CONSOLE.LOG DA CLASSE RESERVE
reserva2.cancelar();
console.log(`Status após cancelamento: ${reserva2.status}`);

reserva2.calcularPrecoTotal(); // 400
reserva2.verificarExpiracaodaReserva(); // ainda pendente, não expirada
console.log(`Status após verificação de expiração: ${reserva2.status}`); // OBSERVAÇÃO PARA VERIFICAR
reserva2.confirmarReserva();
console.log(`Status após confirmação: ${reserva2.status}`); // CONFIRMADA
reserva2.verificarExpiracaodaReserva(); // já confirmada, não muda
console.log(`Status após verificação de expiração: ${reserva2.status}`); // CONFIRMADA
reserva2.realizarCheckIn();
console.log(`Status após check-in: ${reserva2.status}`); // CHECKED_IN
console.log('Status após cancelamento', reserva2.status);
// NÃO CONSEGUIMOS VERICAR EXPIRAÇÃO RESERVA POIS NÃO CONSEGUIMOS RETORNAR CANCELADA
reserva2.cancelar();
console.log(reserva2.status); // Agora será StatusReserva.CANCELADA
reserva2.realizarCheckIn();
console.log(`Status após check-in: ${reserva2.status}`); // NAO PODE REALIZAR CHECK-IN

//teste bagagem
const bagagemTeste = new Bagagem('bt1', TipoBagagem.BAGAGEM_MAO, 9, '55cmx25cm', 0);
console.log(`Taxa para bagagem de mão: R$ ${bagagemTeste.calcularTaxaExcesso(passageiro1)}`); // R$ 0.00
const bagagemTeste2 = new Bagagem('bt2', TipoBagagem.BAGAGEM_DESPACHADA, 28, '70cmx40cm', 0);
console.log(`Taxa para bagagem despachada: R$ ${bagagemTeste2.calcularTaxaExcesso(passageiro1)}`); // R$ 100.00
const validarDimensoes = bagagemTeste.validarDimensoes();
console.log(`Dimensões válidas? ${validarDimensoes}`); // true
