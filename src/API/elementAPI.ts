
import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/Rx";

import { Storage } from '@ionic/storage';

import { Element } from '../model/element';

@Injectable()
export class ElementAPI {
  const STORAGEURL: string = '';
  private elementListSource = new BehaviorSubject<Array<Element>>(
    new Array<Element>());
  //public eventList = this.elementListSource.asObservable();

  constructor(public storage: Storage){
    this.load();
  }

  loadAllAsync(ElementMockData: <Array<Element>>){

    for(let e of ElementMockData){
      e.id = this.getNextEventId();

      this.elementListSource.getValue().push(e.copy());
    }

    this.elementListSource.next(this.elementListSource.getValue());

    this.save();
  };

  load(){
    this.storage.get(STORAGEURL).then((value)=>
      value != null ? this.elementListSource.next(value) :
                      this.elementListSource.next(new Array<Element>())
    );
  }

  save(){
    this.storage.set(STORAGEURL, this.elementListSource.getValue());
  }

  delete(e: Element){
    this.elementListSource.getValue().
            splice(this.elementListSource.getValue().indexOf(e),1);

    this.save();
  }

  edit(e: Element){
    if (e.id == null){
      e.id = this.getNextId();
    }

    let list = <Array<Element>> this.elementListSource.getValue();

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
