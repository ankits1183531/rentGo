import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()

export class DataService {
  
  googleUser: any = {};  

  constructor() { }
  
  setData(data: any) {
    this.googleUser = data;
  }

  getData(){
    return this.googleUser;
  }

}