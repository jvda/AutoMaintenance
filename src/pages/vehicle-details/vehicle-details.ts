import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { NavController, NavParams } from 'ionic-angular';

import { Vehicle } from '../../model/vehicle';

@Component({
  selector: 'page-vehicle-details',
  templateUrl: 'vehicle-details.html'
})
export class VehicleDetailsPage {
  vehicleList: Array<Vehicle>;
  v: Vehicle;
  selectedVehicle: Vehicle;


  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage){
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedVehicle = navParams.get('v');
    this.vehicleList = navParams.get('vList');

    this.v = new Vehicle();
    if (this.selectedVehicle != null){
      this.loadVehicle();
    }
  }

  loadVehicle(){
    //this.selectedVehicle.assign(this.v);
    this.v.id = this.selectedVehicle.id;
    this.v.plate = this.selectedVehicle.plate;
    this.v.image = this.selectedVehicle.image;
    this.v.brand = this.selectedVehicle.brand;
    this.v.model = this.selectedVehicle.model;
    this.v.name = this.selectedVehicle.name;
    this.v.type = this.selectedVehicle.type;
  }


  getNextVehiclesId(vehicles: Array<Vehicle>){
    let max = 0;

    for(let v of vehicles){
      if (v.id > max){
        max = v.id;
      }
    }

    return max + 1;
  }

  save(event){

    if (this.selectedVehicle == null){
      this.selectedVehicle = new Vehicle();
      this.vehicleList.push(this.selectedVehicle);
      this.selectedVehicle.id = this.getNextVehiclesId(this.vehicleList);
    }else{
      this.selectedVehicle.id = this.v.id;
    }

    this.selectedVehicle.plate = this.v.plate;
    this.selectedVehicle.image = this.v.image;
    this.selectedVehicle.brand = this.v.brand;
    this.selectedVehicle.model = this.v.model;
    this.selectedVehicle.name = this.v.name;
    this.selectedVehicle.type = this.v.type;

    this.storage.set('list', this.vehicleList);
  }
}
