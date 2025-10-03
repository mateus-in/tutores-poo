console.log('3.companhia');

// teste 
import { Aeronave
 } from "./Aeronave";
 import { StatusAeronave } from "./enums/StatusAeronave";
const aeronave = new Aeronave("PT-123", "Boeing 737", 180, StatusAeronave.DISPONIVEL);

console.log(aeronave.estarDisponivel()); // true

aeronave.alterarStatus(StatusAeronave.MANUTENCAO);
console.log(aeronave.estarDisponivel()); // false