//import { Promise } from 'core-js/es6';
import { Vehicle } from '../model/vehicle';
import { VehiclesMockData } from './mockData';

class VehicleAPI {

  getAllVehiclesAsync(){

    return VehiclesMockData;
  };

}

export {
  VehicleAPI
}
