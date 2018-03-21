
import { Element } from './element';

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

  copy(){
    let e: Event = <Event> super.copy();

    e.vehicleid = this.vehicleid;
    e.date = this.date;
    e.measurement = this.measurement;
    e.unid = this.unid;
    e.price = this.price;
    e.unidprice = this.unidprice;

    return e;
  }

}
