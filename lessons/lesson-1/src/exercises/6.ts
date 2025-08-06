// Exercício 6 (Difícil)
// Union types e type assertion

function processar(valor: string | number): number {
  if (typeof valor === 'string') {
    return (valor as string).length;
  } else {
    return (valor as number) * 2;
  }
}

console.log('Resultado (string):', processar('abcde'));
console.log('Resultado (number):', processar(10));
