import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  showDetails  = {};

  constructor() {
    console.log('sadadas');
    this.getUserDetails();
   }

  ngOnInit() {
  }

  getUserDetails() {
    this.showDetails = JSON.parse(localStorage.getItem('Details'));
    console.log(this.showDetails);
  }

}
