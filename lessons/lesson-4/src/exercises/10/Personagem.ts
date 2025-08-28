export class Personagem {
  constructor(public nome: string, public vida: number, public ataque: number) {}

  atacar(inimigo: Personagem) {
    const dano = this.ataque;
    inimigo.vida -= this.ataque;

    console.log(`${this.nome} ataca ${inimigo.nome} e causa ${dano} de dano`);
    console.log(`${inimigo.nome} agora tem ${inimigo.vida} de vida`);
  }
}
