import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Vehicle } from '../../model/vehicle';
import { Event } from '../../model/event';
import { Maintenance } from '../../model/maintenance';
import { Storage } from '@ionic/storage';

import { MaintenancesPage } from '../maintenance/maintenances';

//import { VehicleDetailsPage } from '../maintenance/vehicle-details';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
  vehicles: Array<Vehicle>;
  selectedVehicle: Vehicle;
  events: Array<Event>;
  eventsFitered: Array<Event>;
  maintenances: Array<Maintenance>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage){

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedVehicle = navParams.get('v');

    if (this.selectedVehicle == null ){
      storage.get('list').then((value)=>
        value != null ? this.vehicles = value : this.vehicles = new Array<Vehicle>()
      );
    } else{
      this.vehicles = new Array();
      this.vehicles.push(this.selectedVehicle);
    }

    storage.get('events').then((value)=>
      this.loadEvents(value)
    );

  }

  loadEvents(value: Array<Event>){
    value != null ? this.events = value : this.events = new Array<Event>();

    if (this.selectedVehicle != null ){
      //this.eventsFitered = this.events.filter(this.filterEvents);
      this.eventsFitered = this.events.filter((event: Event) =>
        event.vehicleid == this.selectedVehicle.id
      );
    } else {
      this.eventsFitered = this.events;
    }
  }

  getNameVehicle(id: Number){
    return this.findVehicle(id).name;
  }

  getImageVehicle(id: Number){
    return this.findVehicle(id).image;
  }

  findVehicle(id: Number){
    let v: Vehicle;
    for(v of this.vehicles){
      if (v.id == id){
        break;
      }
    }
    return v;
  }

  filterVehicle(v: Vehicle, ){
    return
  }

  eventNew(event){
    this.navCtrl.push(MaintenancesPage, {
      v: this.selectedVehicle,
      events: this.events
    });
  }

  eventDel(event,e){
    this.events.splice(this.events.indexOf(e),1);

    this.storage.set('events', this.events);

  }

  eventEdit(event,e){
    this.navCtrl.push(MaintenancesPage, {
      v: this.selectedVehicle,
      e: e,
      events: this.events
    });
  }

}
