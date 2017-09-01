export class Vehicle {
  id: number;
  plate: string;
  name: string;
  type: string;
  brand: string;
  model: string;
  image: string;

  constructor() {
    this.id = 0;
    this.plate = "";
    this.name = "";
    this.type = "";
    this.brand = "";
    this.model = "";
    this.image = "";
  }

  /*function assign(v: Vehicle){
    this.v.id = this.id;
    this.v.plate = this.plate;
    this.v.image = this.image;
    this.v.brand = this.brand;
    this.v.model = this.model;
    this.v.name = this.name;
    this.v.type = this.type;
  }*/
}
