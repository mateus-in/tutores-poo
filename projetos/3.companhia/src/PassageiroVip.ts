import { Bagagem } from './Bagagem';
import { Passageiro } from './Passageiro';
import { TipoBagagem } from './enums/TipoBagagem';
import { BeneficiosEnum } from './enums/BeneficiosEnum';

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
      return [
        BeneficiosEnum.SALA_VIP,
        BeneficiosEnum.DESCONTO_ESPECIAL,
        BeneficiosEnum.BAGAGEM_EXTRA
    ];
}

listarexclusividadessalavip():string[]{
  return[
    "Buffet de alta gastronomia e bebidas",
    "Wi-fi de alta velocidade exclusivo",
    "Chuveiros e produtos de higiene pessoal",
  ]
}


  calcularPrecoPassagem(precoBase: number): number {
        return precoBase * 0.9; // 10% de desconto
        
  }
  validarBagagem(bagagens: Bagagem[]): boolean {
     const pesovalido= bagagens.every(Bagagem => {
      switch (Bagagem.tipo) {
        case TipoBagagem.BAGAGEM_MAO:
          return Bagagem.peso <= 10;
        case TipoBagagem.BAGAGEM_DESPACHADA:
          return Bagagem.peso <= 32;
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
        
                      if (contagemMao!== 1 ) {
                        return false; 
                      } else if (contagemDespachada !== 2) {
                        return false;
                      }else if (contagemEspecial !== 1){
                        return  false ;
                      } else {
                        return true;
                      }
      }
  }

