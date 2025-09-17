import { CargoFuncionario } from "../Enums/enumCargoFuncionario";
import { TurnoTrabalho } from "../Enums/enumTurnoTrabalho";
import { Reserva } from "./Reserva";
import{Hotel} from "./Hotel";


 export class Funcionario{
    id: string;
  nome: string;
  cargo: CargoFuncionario;
  turno: TurnoTrabalho;
  
 constructor(id: string, nome: string, cargo: CargoFuncionario, turno: TurnoTrabalho) {
    this.id = id;
    this.nome = nome;
    this.cargo = cargo;
    this.turno = turno;
  }


  realizarCheckin(reserva: Reserva): boolean {
    if (!reserva.dataCheckin) {
      reserva.dataCheckin = new Date();
      console.log(`Check-in realizado para reserva ${reserva.id}`);
      return true;
    }
   console.log(`Check-in já realizado para reserva ${reserva.id}`);
    return false;
  }

  realizarCheckout(reserva: Reserva): number{
    
