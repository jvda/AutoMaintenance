
import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/Rx";

import { Storage } from '@ionic/storage';

import { Event } from '../model/event';
import { Element } from '../model/element';

import { ElementAPI } from './elementAPI';
import { EventsMockData } from './mockData';

@Injectable()
export class EventAPI extends ElementAPI {
  //STORAGEURL = 'listEvent';
  public eventList = this.elementListSource.asObservable();

  constructor(public storage: Storage){
    super(storage);
    this.STORAGEURL = 'listEvent';
    //this.load();
  }

  loadAllAsync(){
    super.loadAllAsync(<Array<Event>> JSON.parse(EventsMockData));
  };

  delete(e: Event){
    //TODO: delete all items Actions

    super.delete(e);
  }

  /*
  deleteEvents(v: Vehicle){
    //TODO: Filter

    //TODO: delete all items Actions
  }
  */
}
