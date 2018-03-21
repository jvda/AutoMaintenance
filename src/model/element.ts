
export class Element {
  id: number;
  dateReg: Date;

  constructor() {
    this.id = null;
    this.dateReg = null;
  }

  copy(e: Element) {
    if (e != null){
      this.id = ev.id;
      this.dateReg = e.dateReg;
    }
  }

}
