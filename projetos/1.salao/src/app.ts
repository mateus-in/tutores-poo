import { Hidratacao } from './Hidratacao';
import { Corte } from './Corte';
import { Manicure } from './Manicure';
import { Promocao } from './Promocao';

const promocao = new Promocao(
  'Promo Verão',
  10,
    new Date('2025-09-01'),
    new Date('2025-12-31'),
    ['hidratacao1'], // Serviços aplicáveis à promoção
    );

const hidratacao = new Hidratacao('hidratacao1', 100, 60, 'premium', promocao);
console.log(hidratacao.calcularPrecoFinal());

const corte = new Corte(promocao, 'corte1', 80, 45);
console.log(corte.calcularPrecoFinal());

const manicure = new Manicure(promocao, 'manicure1', 50, 30);
console.log(manicure.calcularPrecoFinal());
