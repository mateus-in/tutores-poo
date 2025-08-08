// Exercício 4 (Difícil)
// Type personalizado e função para produto mais caro

type Produto = {
  id: string;
  nome: string;
  preco: number;
};

const produtos: Produto[] = [
  { id: '1', nome: 'Camiseta', preco: 50 },
  { id: '2', nome: 'Tênis', preco: 200 },
  { id: '3', nome: 'Boné', preco: 30 },
];

function produtoMaisCaro(lista: Produto[]): Produto {
  return lista.reduce((maisCaro, atual) => (atual.preco > maisCaro.preco ? atual : maisCaro));
}

console.log('Produto mais caro:', produtoMaisCaro(produtos));
