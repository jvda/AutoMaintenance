
import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/Rx";

import { Storage } from '@ionic/storage';

import { Vehicle } from '../model/vehicle';
import { VehiclesMockData } from './mockData';

@Injectable()
export class VehicleAPI {
  //vehicleList: Array<Vehicle>;
  private vehicleListSource = new BehaviorSubject<Array<Vehicle>>(
    new Array<Vehicle>());
  public vehicleList = this.countdownSource.asObservable();

  constructor(public storage: Storage){
    this.load();
  }

  loadAllVehiclesAsync(){

    let mock = <Array<Vehicle>> VehiclesMockData;

    for(let v of mock){
      v.id = this.getNextVehiclesId();
      let vehicle = new Vehicle();
      vehicle.copy(v);

      this.vehicleListSource.next(this.vehicleListSource.getValue().push(vehicle));
    }

    this.save();
  };

  load(){
    this.storage.get('list').then((value)=>
      this.vehicleListSource.next(value != null ? value : new Array<Vehicle>());
    );
  }

  save(){
    this.storage.set('list', this.vehicleListSource.getValue());
  }

  deleteVehicle(v: Vehicle){
    this.vehicleListSource.getValue().
            splice(this.vehicleListSource.getValue().indexOf(v),1);

    this.save();

    //TODO: delete all items events
  }

  editVehicle(v: Vehicle){
    if (v.id == null){
      v.id = this.getNextVehiclesId();
    }

    this.vehicleListSource.getValue().next(
      this.vehicleListSource.getValue().splice(
        this.vehicleListSource.getValue().indexOf(
          this.vehicleListSource.getValue().filter( vehicle => vehicle.id === v.id).pop()
        ),1,v)
    );

    this.save();
  }

  private getNextVehiclesId(){
    let max = 0;

    for(let v of this.vehicleListSource.getValue()){
      if (v.id > max){
        max = v.id;
      }
    }

    return max + 1;
  }

  exportVehicleList(){
    var jsonText = JSON.stringify(this.vehicleListSource.getValue(), null, " ");

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
    var jsonText = JSON.stringify(this.vehicleListSource.getValue(), memberfilter, " ");

    return jsonText;
  }

}
