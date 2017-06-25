import { Component } from '@angular/core';

import { Vehicle } from '../../model/vehicle';
//import { Promise } from 'core-js/es6';
import { VehicleAPI } from '../../API/vehicleAPI';
//import { VehiclesMockData } from '../../API/mockData';

@Component({
  selector: 'page-vehicles',
  templateUrl: 'vehicles.html'
})
export class VehiclesPage {
  vehicles: Array<Vehicle>;
  //vehicles: Array<{id: number, plate: string}>;

  /*constructor() {
   vehicleAPI.getAllVehiclesAsync().then((vehicles: Array<Vehicle>) => {
      this.vehicles = vehicles;
    });
    this.vehicles = VehiclesMockData;

  }*/

  constructor(vehicleAPI: VehicleAPI) {
    this.vehicles = vehicleAPI.getAllVehiclesAsync();

  }


}
