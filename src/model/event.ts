
import { Element } from '../model/element';

export class Event extends Element {
  date: Date;
  vehicleid: number;
  measurement: number;
  unid: string;
  price: number;
  unidprice: string;

  constructor() {
    super();
    this.vehicleid = null;
    this.date = new Date();
    this.measurement = null;
    this.unid = null;
    this.price = null;
    this.unidprice = null;
  }

  copy(e: Event){
    super(e);
  }

}
