console.log('3.companhia');
import{CompanhiaAerea} from "./CompanhiaAerea";
import { PassageiroComum } from "./PassageiroComum";
import { PassageiroVip} from "./PassageiroVip";
import{ PassageiroCrianca } from "./PassageiroCrianca";
import { Passageiro } from "./Passageiro";
import { Voo } from "./Voo";    
import { Reserva } from "./Reserva";    
import { Aeronave } from "./Aeronave";
import { RelatarioVoos } from "./RelatarioVoos";
import { Bagagem } from "./Bagagem";
import { TipoBagagem} from "./enums/TipoBagagem";
import {BeneficiosEnum} from "./enums/BeneficiosEnum";
import{EnumPassageiroVip} from "./enums/EnumPassageiroVip";
import  {StatusAeronave} from "./enums/StatusAeronave";
import{   StatusAssento} from "./enums/StatusAssento";
import { StatusReserva } from "./enums/StatusReserva";

//TESTES DE USO 
//teste classes pasageiros  
const passageiro1 = new PassageiroComum("1","João Silva","12345678900","passageirocomum1@email.com", "11 91234-56789");
//bagagem correta 
const bagagem1 = new Bagagem("b1", TipoBagagem.BAGAGEM_MAO, 8, "50cmx20cm",0);
const bagagem2 = new Bagagem("b2", TipoBagagem.BAGAGEM_DESPACHADA, 25, "70cmx40cm",0);
const bagagens = [bagagem1, bagagem2];

console.log(passageiro1.validarBagagem(bagagens)); // true
console.log(`Preço da passagem para passageiro comum: R$ ${passageiro1.calcularPrecoPassagem(500).toFixed(2)}`); // R$ 500.00
//bagagem incorreta

