// Exercício 5 (Difícil)
// Interface com método

interface Usuario {
  nome: string;
  idade: number;
  apresentar(): string;
}

const usuario: Usuario = {
  nome: 'Ana',
  idade: 28,
  apresentar() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  },
};

console.log(usuario.apresentar());
