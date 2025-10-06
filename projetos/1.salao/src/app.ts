import { Hidratacao } from './Hidratacao';
import { Corte } from './Corte';
import { Manicure } from './Manicure';
import { Promocao } from './Promocao';
import { Produto } from './Produto';
import { Cliente } from './Cliente';
import { FichaTecnica } from './FichaTecnica';
import { Agendamento } from './Agendamento';
import { Profissional } from './Profissional';
import { Servico } from './Servico';
import { SalaoDeBeleza } from './SalaoDeBeleza';

const promocao1 = new Promocao(
  'Promo Verão',
  10,
<<<<<<< HEAD
  new Date('2025-10-01'),
  new Date('2025-10-30'),
  ['hidratacao1'], // Serviços aplicáveis à promoção
=======
    new Date('2025-09-01'),
    new Date('2025-09-30'),
    [], // Serviços aplicáveis à promoção
>>>>>>> 1b2bb8d (implementado mais funções em SalaoDeBelezal e ajustes)
);
console.log(promocao1);
console.log(promocao1.estaAtiva());
console.log(promocao1.calcularDesconto(10));

const corte = new Corte('corte1', 80, 45, promocao1);
console.log(corte.calcularPrecoFinal());

const manicure = new Manicure('manicure1', 20, 30, promocao1, 20);
console.log(manicure.calcularPrecoFinal());

const produto1 = new Produto('1', 'Shampoo', 50, 25.5, 10);
console.log(produto1);
console.log(produto1.temEstoqueSuficiente(20)); // true
console.log(produto1.consumir(25)); // true
console.log(produto1.precisaReposicao()); // false
console.log(produto1.quantidadeEstoque);

// Testando consumo que excede o estoque
console.log(produto1.consumir(60)); // false
console.log(produto1.quantidadeEstoque); // 50 (não mudou)

// Testando reposição
produto1.consumir(45); // Consome 45 unidades
console.log(produto1.precisaReposicao()); // true (agora precisa de reposição)
console.log(produto1.quantidadeEstoque); // 50 (não mudou, pois o método consumir não altera o estoque diretamente)

// Repondo o estoque
produto1.quantidadeEstoque += 20; // Adiciona 20 unidades ao estoque
console.log(produto1.quantidadeEstoque); // 70
console.log(produto1.precisaReposicao()); // false (não precisa mais de reposição)

<<<<<<< HEAD
const cliente = new Cliente(
  '1',
  'Batatinha',
  '3732611234',
  'batatinha@gmail.com',
  new FichaTecnica([], '', []),
);
console.log(cliente);

cliente.fichaTecnica.alergias.push('Acetona');
cliente.fichaTecnica.observacoes = 'Cliente possui diabetes.';
console.log(cliente);

const salao = new SalaoDeBeleza('Beleza Pura', [], [], [], [produto1], []);
=======
const salao = new SalaoDeBeleza('Beleza Pura', [], [], [], [], [], [], []);
>>>>>>> 1b2bb8d (implementado mais funções em SalaoDeBelezal e ajustes)
console.log(salao);

