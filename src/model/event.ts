
import { Maintenance } from '../model/maintenance';

export class Event {
  id: number;
  date: Date;
  vehicleid: number;
  measurement: number;
  unid: string;
  price: number;
  unidprice: string;
  maintenances: Array<Maintenance>;

  constructor() {
    this.id = null;
    this.vehicleid = null;
    this.date = new Date();
    this.measurement = null;
    this.unid = null;
    this.price = null;
    this.unidprice = null;
    this.maintenances = new Array<Maintenance>();
  }

}
