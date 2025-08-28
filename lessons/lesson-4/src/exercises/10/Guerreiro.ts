import { Personagem } from './Personagem';

export class Guerreiro extends Personagem {
  constructor(
    public nome: string,
    public vida: number,
    public ataque: number,
    public forca: number,
  ) {
    super(nome, vida, ataque);
  }

  atacar(inimigo: Personagem) {
    const dano = this.ataque + this.forca;
    inimigo.vida -= dano;

    console.log(`${this.nome} (Guerreiro) ataca ${inimigo.nome} e causa ${dano} de dano`);
    console.log(`${inimigo.nome} agora tem ${inimigo.vida} de vida`);
  }
}
