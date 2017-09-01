import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Vehicle } from '../../model/vehicle';
import { VehicleAPI } from '../../API/vehicleAPI';
import { Storage } from '@ionic/storage';

import { VehicleDetailsPage } from '../vehicle-details/vehicle-details';
import { EventsPage } from '../events/events';

@Component({
  selector: 'page-vehicles',
  templateUrl: 'vehicles.html'
})
export class VehiclesPage {
  vehicles: Array<Vehicle>;
  maxId: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage){
    storage.get('list').then((value)=>
      value != null ? this.vehicles = value : this.vehicles = new Array<Vehicle>()
    );
  }

  vehicleEdit(event, v) {
    this.navCtrl.push(VehicleDetailsPage, {
      v: v, vList: this.vehicles
    });

  }

  vehicleDel(event, v) {
    this.vehicles.splice(this.vehicles.indexOf(v),1);

    this.storage.set('list', this.vehicles);

    //TODO: delete all maintenances of this vehicle
  }

  vehicleNew(event){
    this.navCtrl.push(VehicleDetailsPage, {
      v: null, vList: this.vehicles
    });
  }

  maintenanceList(event,v){
    this.navCtrl.push(EventsPage, {
      v: v
    });
  }
}
