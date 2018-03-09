import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { NavController, NavParams } from 'ionic-angular';

import { Vehicle } from '../../model/vehicle';
import { VehicleAPI } from '../../API/vehicleAPI';

@Component({
  selector: 'page-vehicle-details',
  templateUrl: 'vehicle-details.html'
})
export class VehicleDetailsPage {
  v: Vehicle;
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
        public api: VehicleAPI, private camera: Camera){

    this.v = new Vehicle();
    this.v.copy(navParams.get('v'));
  }

  save(event){
    this.api.editVehicle(this.v);
  }

  openCamera (event){
    this.camera.getPicture(this.options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.v.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     console.log(err);// Handle error
    });

  }

}
