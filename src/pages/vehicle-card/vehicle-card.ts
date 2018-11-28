import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output() onEdit = new EventEmitter<Vehicle>();
  @Output() onDel = new EventEmitter<Vehicle>();
  @Output() onMList = new EventEmitter<Vehicle>();

  vehicleEdit(event) {
        this.onEdit.emit(this._v);
  }

  vehicleDel(event) {
        this.onDel.emit(this._v);
  }

  maintenanceList(event){
        this.onMList.emit(this._v);
  }
}
