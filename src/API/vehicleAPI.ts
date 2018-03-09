
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { Vehicle } from '../model/vehicle';
import { VehiclesMockData } from './mockData';

@Injectable()
export class VehicleAPI {
  vehicleList: Array<Vehicle>;

  constructor(public storage: Storage){
    this.load();
  }

  getAllVehiclesAsync(){

    return <Array<Vehicle>> VehiclesMockData;
  };

  load(){
    this.storage.get('list').then((value)=>
      value != null ? this.vehicleList = value : this.vehicleList = new Array<Vehicle>()
    );
  }

  save(){
    this.storage.set('list', this.vehicleList);
  }

  deleteVehicle(v: Vehicle){
    this.vehicleList.splice(this.vehicleList.indexOf(v),1);

    this.save();

    //TODO: delete all items events
  }

  editVehicle(v: Vehicle){
    this.vehicleList.splice(
      this.vehicleList.indexOf(
        this.vehicleList.filter( vehicle => vehicle.id === v.id).pop()
      ),1,v);

    this.save();

  }


  getNextVehiclesId(){
    let max = 0;

    for(let v of this.vehicleList){
      if (v.id > max){
        max = v.id;
      }
    }

    return max + 1;
  }

}
