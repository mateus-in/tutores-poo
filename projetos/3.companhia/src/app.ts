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
const bagagem3 = new Bagagem("b3", TipoBagagem.BAGAGEM_MAO, 8, "50cmx20cm",0);
const bagagem4 = new Bagagem("b4", TipoBagagem.BAGAGEM_MAO, 10, "55cmx25cm",0);
//TESTAR DEPOIS COM A BAGAGEM DESPACHADA
const bagagensIncorretas = [bagagem3, bagagem4,];
console.log(passageiro1.validarBagagem(bagagensIncorretas)); // false
const bagagem5 = new Bagagem("b5", TipoBagagem.BAGAGEM_ESPECIAL, 35, "80cmx50cm",0);
const bagagensIncorretas2 = [ bagagem5];
console.log(passageiro1.validarBagagem(bagagensIncorretas2)); // false
//teste passageiro crianca 
const passageiro2 = new PassageiroCrianca("2","Maria Silva","98765432100"," @email.com", "11 99876-54321",8,"João Silva");
console.log(`Preço da passagem para passageiro criança: R$ ${passageiro2.calcularPrecoPassagem(500).toFixed(2)}`); // R$ 250.00
//bagagem correta
const bagagem6 = new Bagagem("b6", TipoBagagem.BAGAGEM_MAO, 8, "50cmx20cm",0);
const bagagem7 = new Bagagem("b7", TipoBagagem.BAGAGEM_DESPACHADA, 20, "70cmx40cm",0);
const bagagensCrianca = [bagagem6, bagagem7];
console.log(passageiro2.validarBagagem(bagagensCrianca)); // true
//bagagem incorreta
const bagagem8 = new Bagagem("b8", TipoBagagem.BAGAGEM_MAO, 8, "50cmx20cm",0);
const bagagem9 = new Bagagem("b9", TipoBagagem.BAGAGEM_MAO, 10, "55cmx25cm",0);
const bagagensCriancaIncorreta = [bagagem8, bagagem9];
console.log(passageiro2.validarBagagem(bagagensCriancaIncorreta)); // false
const bagagem10 = new Bagagem("b10", TipoBagagem.BAGAGEM_ESPECIAL, 35, "80cmx50cm",0);
const bagagensCriancaIncorreta2 = [ bagagem10];
console.log(passageiro2.validarBagagem(bagagensCriancaIncorreta2)); // false
//teste passageiro vip
















