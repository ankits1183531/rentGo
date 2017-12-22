import { Component, OnInit } from '@angular/core';
import { DataService } from "../service/data-sharing.service";

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  showDetails  = {};

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    console.log('asdsadad');
    this.showDetails = this.data.getData();
    console.log(this.showDetails);
  }

}
