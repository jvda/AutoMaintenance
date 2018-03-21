
export class Element {
  id: number;
  dateReg: Date;

  constructor() {
    this.id = null;
    this.dateReg = null;
  }

  copy() {
    let e: any = new Element();

    e.id = this.id;
    e.dateReg = this.dateReg;

    return e;
  }

}
