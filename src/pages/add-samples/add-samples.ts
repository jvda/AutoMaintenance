import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Vehicle } from '../../model/vehicle';
import { VehicleAPI } from '../../API/vehicleAPI';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-add-samples',
  templateUrl: 'add-samples.html'
})
export class AddSamplesPage {
  vehicles: Array<Vehicle>;
  maxId: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public api: VehicleAPI){

  }

  addSamples(event ) {
    this.api.loadAllVehiclesAsync();
  }

}
