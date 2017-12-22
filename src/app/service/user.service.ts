import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }

  isLoggedIn = () => {
    const loggedIn = false;
    return localStorage.getItem('access_token') ? true : false;
  }

}
