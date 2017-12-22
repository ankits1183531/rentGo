import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  dragAndDropAddress : number;

  @ViewChild("search")
  public searchElementRef: ElementRef;


  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.zoom = 8;
    this.latitude = 28.6139;
    this.longitude = 77.2090;
    this.searchControl = new FormControl();
    this.setCurrentPosition();
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

   setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  dragAndDropFuntionality(event){ 
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    let  geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      { 'location': { lat: this.latitude, lng: this.longitude } }, 
      (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            console.log('aaaa');
            this.searchControl.setValue(results[0].formatted_address);
          } else {
            console.log('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      });
  }


}
