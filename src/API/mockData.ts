import { Vehicle } from '../model/vehicle';

const VehiclesMockData: Array<Vehicle> = [
  { id: 1, plate: "1234567A", type: "Coche", name: "Partnecita", brand: "Peugeot", model: "Partner" },
  { id: 2, plate: "5067254B", type: "Moto", name: "BMWcita", brand: "BMW", model: "F650GS"},
  { id: 3, plate: "1902045C", type: "Coche", name: "Partnecita2", brand: "Peugeot", model: "Partner"}
]

/*
const TypesVehicles: Array<{type:string, icon:string}> = [
  {type: "Coche", icon: "car"},
  {type: "Moto", icon: "ion-android-bicycle"},
  {type: "Bicicleta", icon: ""},
  {type: "Caravana", icon: ""}
]
*/

export {
  VehiclesMockData
}
