import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Vehicle } from '../../model/vehicle';
import { Event } from '../../model/event';
import { Maintenance } from '../../model/maintenance';
import { EventAPI } from '../../API/eventAPI';
import { VehicleAPI } from '../../API/vehicleAPI';

import { MaintenancesPage } from '../maintenance/maintenances';

//import { VehicleDetailsPage } from '../maintenance/vehicle-details';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
  selectedVehicle: Vehicle;

  constructor(public navCtrl: NavController, public navParams: NavParams,
        public eventApi: EventAPI, public vehicleApi: VehicleAPI){

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedVehicle = navParams.get('v');
  }

  /*
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
  */

  filterVehicle(v: Vehicle, ){
    return
  }

  eventNew(event){
    this.navCtrl.push(MaintenancesPage, {
      v: this.selectedVehicle
    });
  }

  eventDel(event,e){
    this.eventApi.delete(e);
  }

  eventEdit(event,e){
    this.navCtrl.push(MaintenancesPage, {
      v: this.selectedVehicle,
      e: e
    });
  }

}
