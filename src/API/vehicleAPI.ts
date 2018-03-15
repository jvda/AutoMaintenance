
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

  loadAllVehiclesAsync(){

    let mock = <Array<Vehicle>> VehiclesMockData;

    for(let v of mock){
      v.id = this.getNextVehiclesId();
      let vehicle = new Vehicle();
      vehicle.copy(v);

      this.vehicleList.push(vehicle);
    }

    this.save();
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
    if (v.id == null){
      v.id = this.getNextVehiclesId();
    }

    this.vehicleList.splice(
      this.vehicleList.indexOf(
        this.vehicleList.filter( vehicle => vehicle.id === v.id).pop()
      ),1,v);

    this.save();
  }

  private getNextVehiclesId(){
    let max = 0;

    for(let v of this.vehicleList){
      if (v.id > max){
        max = v.id;
      }
    }

    return max + 1;
  }

  exportVehicleList(){
    var jsonText = JSON.stringify(this.vehicleList, null, " ");

    return jsonText;
  }

  printVehicleList(){

    var memberfilter = new Array();
    memberfilter[0] = "id";
    memberfilter[1] = "plate";
    memberfilter[2] = "name";
    memberfilter[3] = "type";
    memberfilter[4] = "brand";
    memberfilter[5] = "model";
    var jsonText = JSON.stringify(this.vehicleList, memberfilter, " ");

    return jsonText;
  }

}
