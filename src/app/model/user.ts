import {Prodotto} from "./prodotto";
import {CreditCard} from "./creditCard";

export class User{

  id:number;
  nome:string;
  cognome:string;
  username:string;
  password:string;
  listaCreditCard:Array<CreditCard>;
  listaProdotti:Array<Prodotto>;
}
