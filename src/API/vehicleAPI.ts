//import { Promise } from 'core-js/es6';
import { Vehicle } from '../model/vehicle';
import { VehiclesMockData } from './mockData';

class VehicleAPI {

  getAllVehiclesAsync(){

    return VehiclesMockData;
  };

  /*getAllVehiclesAsync(): Promise<Array<Vehicle>> {
    let vehiclesPromise = new Promise((resolve, reject) => {
      resolve(VehiclesMockData);
    });

    return vehiclesPromise;
  };*/
/*
  getVehicleByIdAsync(id: number): Promise<Vehicle> {
    let vehiclePromise = new Promise((resolve, reject) => {
      let vehicle = VehiclesMockData.find((vehicle: Vehicle) => {
        return vehicle.id === id;
      });

      resolve(vehicle);
    });

    return vehiclePromise;
  };

  saveVehicle(currentVehicle: Vehicle): void {
    let vehicle = VehiclesMockData.find((vehicle: Vehicle) => {
      return vehicle.id === currentVehicle.id;
    });

    if (vehicle) {
        let vehicleIndex = VehiclesMockData.indexOf(vehicle);
        VehiclesMockData.splice(vehicleIndex, 1, currentVehicle);
    } else {
      let lastId = VehiclesMockData[VehiclesMockData.length -1].id;
      currentVehicle.id = lastId + 1;

      VehiclesMockData.push(currentVehicle);
    }

    vehicle = currentVehicle;
  }
*/
}

export {
  VehicleAPI
}
