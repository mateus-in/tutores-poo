import { Hidratacao } from './Hidratacao';
import { Corte } from './Corte';
import { Manicure } from './Manicure';
import { Promocao } from './Promocao';

const promocaoCorte = new Promocao('promo1', 20, new Date('2024-06-01'), new Date('2024-06-30'), [
  'standard',
]);
const promocaoHidratacao = new Promocao(
  'promo2',
  15,
  new Date('2024-06-01'),
  new Date('2024-06-30'),
  ['premium'],
);
const promocaoManicure = new Promocao(
  'promo3',
  10,
  new Date('2024-06-01'),
  new Date('2024-06-30'),
  ['economico'],
);

const hidratacao = new Hidratacao('hidratacao1', 100, 60, 'premium');
console.log(hidratacao.calcularPrecoFinal());

const corte = new Corte(promocaoCorte, 'corte1', 80, 45, 'standard');
console.log(corte.calcularPrecoFinal());

const manicure = new Manicure(promocaoManicure, 'manicure1', 50, 30, 'economico');
console.log(manicure.calcularPrecoFinal());
