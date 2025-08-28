import { Personagem } from './Personagem';

export class Mago extends Personagem {
  constructor(
    public nome: string,
    public vida: number,
    public ataque: number,
    public mana: number,
  ) {
    super(nome, vida, ataque);
  }

  atacar(inimigo: Personagem) {
    console.log(`${this.nome} (Mago) ataca com um cajado.`);
    super.atacar(inimigo);
  }

  lancarFeitico(inimigo: Personagem) {
    if (this.mana >= 10) {
      const dano = this.ataque + this.mana * 0.5;
      inimigo.vida -= dano;
      this.mana -= 10;

      const message1 = `${this.nome} (Mago) lança um feitiço em ${inimigo.nome} e causa ${dano} de dano`;
      const message2 = `${inimigo.nome} agora tem ${inimigo.vida} de vida. ${this.nome} tem ${this.mana} de mana.`;

      console.log(message1);
      console.log(message2);
    } else {
      console.log(`${this.nome} (Mago) não tem mana suficiente para lançar um feitiço.`);
    }
  }
}
