import { Bagagem } from './Bagagem';
import { Passageiro } from './Passageiro';
import { TipoBagagem } from './enums/TipoBagagem';

export class PassageiroCrianca extends Passageiro {
  constructor(
    public id: string,
    public nome: string,
    public documento: string,
    public email: string,
    public telefone: string,
    public idade: number,
    public responsavel: string,
  ) {
    super(id, nome, documento, email, telefone);
  }

  calcularPrecoPassagem(precoBase: number): number {
    // crianca COM MENOS DE 12 ANOS paga metade
    if (this.idade < 12) {
    return precoBase * 0.5; 
  }else{
    return precoBase;
  }
  }
  
  validarBagagem(bagagens: Bagagem[]): boolean {

      const pesovalido= bagagens.every(Bagagem => {
      switch (Bagagem.tipo) {
        // se o sinal da erro e so trocar o sinal 
        case TipoBagagem.BAGAGEM_MAO:
          return Bagagem.peso <= 5;
        case TipoBagagem.BAGAGEM_DESPACHADA:
          return Bagagem.peso <= 20;
        default: 
          return true;
      }
    });
    if (!pesovalido) {
      return false;
    }
    const contarBagagens = (tipo: TipoBagagem) => 
                bagagens.filter(b => b.tipo === tipo).length;
              
            const contagemMao = contarBagagens(TipoBagagem.BAGAGEM_MAO);
            const contagemDespachada = contarBagagens(TipoBagagem.BAGAGEM_DESPACHADA);
            const contagemEspecial = contarBagagens(TipoBagagem.BAGAGEM_ESPECIAL);
    
                  if (contagemMao!==1) {
                    return false; 
                  } else if (contagemDespachada !==1) {
                    return false;
                  }else if (contagemEspecial !==0){
                    return  false ;
                  } else {
                    return true;
                  }
  }
}
