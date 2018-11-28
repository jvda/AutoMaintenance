import { Component, Input } from '@angular/core';

import { Vehicle } from '../../model/vehicle';


@Component({
  selector: 'vehicle-card',
  templateUrl: 'vehicle-card.html'
})
export class VehicleCard {
  private _v: Vehicle;

  @Input()
  set v(v: Vehicle){
    this._v = v;
  }
  get v(): Vehicle {return this._v }

  vehicleEdit(event) {

  }

  vehicleDel(event) {
  }

  vehicleNew(event){
  }

  maintenanceList(event){
  }
}
