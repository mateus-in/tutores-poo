import { Bagagem } from './Bagagem';
import { Passageiro } from './Passageiro';
import { TipoBagagem } from './enums/TipoBagagem';

export class PassageiroVip extends Passageiro {
  constructor(
    public id: string,
    public nome: string,
    public documento: string,
    public email: string,
    public telefone: string,
    protected numerocartao: string,
  ) {
    super(id, nome, documento, email, telefone);
  }

  listarbeneficios(): string[]{
    return ["Acessso a sala VIP",
             "Desconto especial",
            "Maior quantidade de bagagens despachada", ];
  }

  calcularPrecoPassagem(precoBase: number): number {
        return precoBase * 0.8;
  }
  validarBagagem(bagagens: Bagagem[]): boolean {
     const contarBagagens = (tipo: TipoBagagem) => 
                    bagagens.filter(b => b.tipo === tipo).length;
                  
                const contagemMao = contarBagagens(TipoBagagem.BAGAGEM_MAO);
                const contagemDespachada = contarBagagens(TipoBagagem.BAGAGEM_DESPACHADA);
                const contagemEspecial = contarBagagens(TipoBagagem.BAGAGEM_ESPECIAL);
        
                      if (contagemMao> 1 ) {
                        return false; 
                      } else if (contagemDespachada > 2) {
                        return false;
                      }else if (contagemEspecial > 1){
                        return  false ;
                      } else {
                        return true;
                      }
      }
  }

