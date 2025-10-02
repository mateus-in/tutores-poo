import { QuartoSimples } from './tiposdequarto/QuartoSimples';
import { TurnoTrabalho } from './Enums/enumTurnoTrabalho';
import { CargoFuncionario } from './Enums/enumCargoFuncionario';
import { Funcionario } from './Entidades/Funcionario';
import { Hotel } from './Entidades/Hotel';
import { ServicoAdicional } from './Entidades/ServicoAdicional';
import { CategoriaServico } from './Enums/enumCategoriaServico';
import { RelatorioHotel } from './Entidades/RelatorioHotel';
import { Hospede } from './Entidades/Hospede';
import { FormaPagamento } from './Enums/enumFormaPagamento';
import { Pagamento } from './Entidades/Pagamento';
import { Reserva } from './Entidades/Reserva';
import { Promocao } from './Entidades/promocao';

const QuartoSimples1 = new QuartoSimples(101, 2, 4, 150, ['Quarto Simples']);
const QuartoSimples2 = new QuartoSimples(202, 3, 4, 150, ['Quarto Simples']);

import { QuartoFamiliar } from './tiposdequarto/Quartofamiliar';
const QuartoFamiliar1 = new QuartoFamiliar(301, 4, 6, 300, ['Quarto Familiar'], 2, true);
const QuartoFamiliar2 = new QuartoFamiliar(402, 5, 6, 300, ['Quarto Familiar'], 1, false);

console.log(QuartoSimples1.obterDescricao());
console.log(QuartoSimples2.obterDescricao());
console.log(QuartoFamiliar1.obterDescricao());
console.log(QuartoFamiliar2.obterDescricao());

const Funcionario1 = new Funcionario(
  'F001',
  'Ana Silva',
  CargoFuncionario.RECEPCIONISTA,
  TurnoTrabalho.MANHA,
);
const Funcionario2 = new Funcionario(
  'F002',
  'Carlos Souza',
  CargoFuncionario.GERENTE,
  TurnoTrabalho.TARDE,
);

console.log(Funcionario1);
console.log(Funcionario2);

const Hospede1 = new Hospede(
  '1',
  'João Pedro',
  '123.456.789-00',
  'email.com.br',
  '11999999999',
  new Date('1990-01-01'),
);
const Quarto = new QuartoSimples(101, 1, 2, 100, ['Wi-Fi', 'TV']);
const Reserva1 = new Reserva('1', Hospede1, Quarto, new Date(), new Date('2025-11-01'), 2);

console.log(Hospede1);

const hotel = new Hotel('Hotel Confort', 'Rua das Flores, 123', [], [], [], []);

hotel.adicionarQuarto(QuartoFamiliar1);

const Pagamento1 = new Pagamento('P001', Reserva1, 450, FormaPagamento.CARTAO_CREDITO);

console.log(Pagamento1);

const Promocao1 = new Promocao('PROMO10', 10, new Date('2025-12-01'), new Date('2025-12-31'), [
  'Simples',
  'Familiar',
]);

console.log(Promocao1);

const RelatorioHotel1 = new RelatorioHotel(new Date('2023-01-01'), new Date('2023-01-31'), []);

console.log(RelatorioHotel1);

const hospede = new Hospede('1', 'K', '1', 'K.COM', '389975689', new Date('2005-11-01'));

console.log(Reserva1);

const ServicoAdicional1 = new ServicoAdicional(
  'S001',
  'Café da Manhã',
  'Café da manhã completo',
  50,
  CategoriaServico.ALIMENTACAO,
);

console.log(ServicoAdicional);
