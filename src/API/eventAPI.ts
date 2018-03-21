
import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/Rx";

import { Storage } from '@ionic/storage';

import { Event } from '../model/event';
import { EventsMockData } from './mockData';

@Injectable()
export class EventAPI extends ElementAPI {
  const STORAGEURL: string = 'listEvent';
  public eventList = this.elementListSource.asObservable();

  constructor(public storage: Storage){
    super(storage);
  }

  loadAllAsync(){
    super(<Array<Event>> JSON.parse(EventsMockData));
  };

  deleteEvent(e: Event){
    //TODO: delete all items Actions

    super(e);
  }

  /*
  deleteEvents(v: Vehicle){
    //TODO: Filter

    //TODO: delete all items Actions
  }
  */
}
