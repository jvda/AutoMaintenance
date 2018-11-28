import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Vehicle } from '../../model/vehicle';
import { VehicleAPI } from '../../API/vehicleAPI';

import { VehicleDetailsPage } from '../vehicle-details/vehicle-details';
import { EventsPage } from '../events/events';

import { VehicleCard } from '../vehicle-card/vehicle-card';

@Component({
  selector: 'page-vehicles',
  templateUrl: 'vehicles.html'
})
export class VehiclesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public api: VehicleAPI){

  }

  /*
  vehicleEdit(event, v) {
    this.navCtrl.push(VehicleDetailsPage, { v: v });
  }

  vehicleDel(event, v) {
    this.api.deleteVehicle(v);
  }

  vehicleNew(event){
    this.navCtrl.push(VehicleDetailsPage);
  }

  maintenanceList(event,v){
    this.navCtrl.push(EventsPage, { v: v });
  }
  */

}
