import { CanActivate, Router, CanDeactivate } from '@angular/router';
import { Injector, Injectable } from '@angular/core';
import { AppService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate, CanDeactivate<any> {

  constructor(private router: Router,
    private appService: AppService) { }

  canActivate() {
    // Imaginary method that is supposed to validate an auth token
    // and return a boolean
    if (this.appService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }

  canDeactivate() {
    if (this.appService.isLoggedIn()) {
      this.router.navigateByUrl('/my');
      return false;
    } else {
      return true;
    }
  }

}
