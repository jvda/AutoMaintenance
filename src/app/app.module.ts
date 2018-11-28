import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { MaintenancesPage } from '../pages/maintenance/maintenances';
import { EventsPage } from '../pages/events/events';
import { VehiclesPage } from '../pages/vehicles/vehicles';
import { VehicleDetailsPage } from '../pages/vehicle-details/vehicle-details';
import { VehicleCard } from '../pages/vehicle-card/vehicle-card';
import { AddSamplesPage } from '../pages/add-samples/add-samples';

import { VehicleAPI } from '../API/vehicleAPI';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    VehiclesPage,
    VehicleDetailsPage,
    VehicleCard,
    MaintenancesPage,
    EventsPage,
    AddSamplesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    VehiclesPage,
    VehicleDetailsPage,
    VehicleCard,
    MaintenancesPage,
    EventsPage,
    AddSamplesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VehicleAPI,
    Camera
  ]
})
export class AppModule {}
