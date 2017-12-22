import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data-sharing.service';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public auth2: any;
  private clientId: string = '156631162482-2jc8kfbodcc4plikoqu7mfdutducj43a.apps.googleusercontent.com';
  private scope = [
    'profile',
    'email',
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/contacts.readonly',
    'https://www.googleapis.com/auth/admin.directory.user.readonly'
  ].join(' ');

  constructor(
    private element: ElementRef ,
    private router: Router, 
    private data: DataService 
  ) {
    console.log('ElementRef: ', this.element);
  }

  ngOnInit() {
    this.googleInit();
  }

  googleInit() {
    let that = this;
    gapi.load('auth2', function () {
      that.auth2 = gapi.auth2.init({
        client_id: that.clientId,
        cookiepolicy: 'single_host_origin',
        scope: that.scope
      });
      that.attachSignin(that.element.nativeElement.firstElementChild);
    });
  }

  attachSignin(element) {
    let that = this;
    this.auth2.attachClickHandler(element, {},

      function (googleUser) {
        let profile = googleUser.getBasicProfile();

        let userDetails = {};
        userDetails['Token'] = googleUser.getAuthResponse().id_token;
        userDetails['ID'] = profile.getId();
        userDetails['Name'] = profile.getName();
        userDetails['ImageUrl'] = profile.getImageUrl();
        userDetails['Email'] = profile.getEmail(); 

        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());

        localStorage.setItem('access_token', googleUser.getAuthResponse().id_token);
        that.data.setData(userDetails);
        that.router.navigate(['/my']);

      }, function (error) {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }

}
