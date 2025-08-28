import { Personagem } from './Personagem';

export class Arqueiro extends Personagem {
  constructor(
    public nome: string,
    public vida: number,
    public ataque: number,
    public destreza: number,
  ) {
    super(nome, vida, ataque);
  }

  atacar(inimigo: Personagem) {
    const dano = this.ataque + this.destreza;
    inimigo.vida -= dano;

    const message = `${this.nome} (Arqueiro) atira uma flecha precisa em ${inimigo.nome} e causa ${dano} de dano`;

    console.log(message);
    console.log(`${inimigo.nome} agora tem ${inimigo.vida} de vida`);
  }
}
