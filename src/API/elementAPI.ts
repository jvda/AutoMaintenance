
import {BehaviorSubject} from "rxjs/Rx";

import { Storage } from '@ionic/storage';

import { Element } from '../model/element';

export class ElementAPI {
  protected STORAGEURL: string = '';
  protected elementListSource = new BehaviorSubject<Array<any>>(
    new Array<Element>());
  //public eventList = this.elementListSource.asObservable();

  constructor(public storage: Storage){
    //this.load();
  }

  loadAllAsync(elementMockData: Array<any>){

    for(let e of elementMockData){
      e.id = this.getNextId();

      this.elementListSource.getValue().push(e.copy());
    }

    this.elementListSource.next(this.elementListSource.getValue());

    this.save();
  };

  load(){
    this.storage.get(this.STORAGEURL).then((value)=>
      value != null ? this.elementListSource.next(value) :
                      this.elementListSource.next(new Array<any>())
    );
  }

  save(){
    this.storage.set(this.STORAGEURL, this.elementListSource.getValue());
  }

  delete(e: any){
    this.elementListSource.getValue().
            splice(this.elementListSource.getValue().indexOf(e),1);

    this.save();
  }

  edit(e: any){
    if (e.id == null){
      e.id = this.getNextId();
    }

    let list = <Array<any>> this.elementListSource.getValue();

    list.splice(
      list.indexOf(
        list.filter( element => element.id === e.id).pop()
      ),1,e);

    this.elementListSource.next(list);

    this.save();
  }

  private getNextId(){
    let max = 0;

    for(let e of this.elementListSource.getValue()){
      if (e.id > max){
        max = e.id;
      }
    }

    return max + 1;
  }

  exportList(){
    var jsonText = JSON.stringify(this.elementListSource.getValue(), null, " ");

    return jsonText;
  }

  printList(){ }

}
