export class Maintenance {
  id: number;
  eventid: number;
  type: string;
  action: string;
  describe: string;
  part: string;

  constructor() {
    this.id = null;
    this.type = null;
    this.eventid = null;
    this.action = null;
    this.describe = null;
    this.part = null;
  }

}
