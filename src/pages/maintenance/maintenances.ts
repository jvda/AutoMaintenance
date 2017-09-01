import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Vehicle } from '../../model/vehicle';
import { Event } from '../../model/event';
import { Maintenance } from '../../model/maintenance';
import { Storage } from '@ionic/storage';

//import { VehicleDetailsPage } from '../maintenance/vehicle-details';

@Component({
  selector: 'page-maintenances',
  templateUrl: 'maintenances.html'
})
export class MaintenancesPage {
  selectedVehicle: Vehicle;
  selectedEvent: Event;
  e: Event;
  events: Array<Event>;
  maintenances: Array<Maintenance>;
  dateDisplay: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage){
    this.selectedVehicle = navParams.get('v');
    this.selectedEvent = navParams.get('e');
    this.events = navParams.get('events');

    this.e = new Event();
    this.copyEvent(this.e, this.selectedEvent);

    if (this.e.vehicleid == null){
      this.e.vehicleid = this.selectedVehicle.id;
    }

    this.dateDisplay = this.e.date.toISOString();
  }

  copyEvent(e1: Event, e2: Event){

    if (e2 != null){
      e2.id == null ? e1.id = e2.id: e1.id = this.getNextEventId(this.events);
      e1.vehicleid = e2.vehicleid;
      e1.date = e2.date;
      e1.measurement = e2.measurement;
      e1.unid = e2.unid;
      e1.price = e2.price;
      e1.unidprice = e2.unidprice;
      e1.maintenances = new Array<Maintenance>();
      if (e2.maintenances != null){
        for (let m of e2.maintenances){
          e1.maintenances.push(this.copyMaintenance(m));
        }
      }
    }
  }

  copyMaintenance(m2: Maintenance){
    let m: Maintenance = null;

    if (m2 != null){
      m = new Maintenance();

      m.id = m2.id;
      m.type = m2.type;
      m.eventid = m2.eventid;
      m.action = m2.action;
      m.describe = m2.describe;
      m.part = m2.part;
    }

    return m;
  }

  getNextEventId(events: Array<Event>){
    let max = 0;

    for(let e of events){
      if (e.id > max){
        max = e.id;
      }
    }

    return max + 1;
  }

  addMaintenance(){
    this.e.maintenances.push(new Maintenance());
  }

  maintenaceNew(event){
    this.addMaintenance();
  }

  save(event){

    if (this.events == null){
      this.events = new Array<Event>();
    }

    if (this.selectedEvent == null){
      this.selectedEvent = new Event();
      this.events.push(this.selectedEvent);
    }

    this.copyEvent(this.selectedEvent, this.e);

    this.storage.set('events', this.events);
  }
}
