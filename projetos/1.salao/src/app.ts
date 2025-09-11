import { Hidratacao } from './Hidratacao';
import { Corte } from './Corte';
import { Manicure } from './Manicure';

const hidratacao = new Hidratacao('hidratacao1', 100, 60, 'premium');
console.log(hidratacao.calcularPrecoFinal());

const corte = new Corte('corte1', 80, 45, 'standard');
console.log(corte.calcularPrecoFinal());

const manicure = new Manicure('manicure1', 50, 30, 'economico');
console.log(manicure.calcularPrecoFinal());
