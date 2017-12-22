import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: DashboardComponent,
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAnJArbqRy5zYKkQTp2OKXsqlzOecyhRo8 ",
      libraries: ["places"]
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [
    DashboardComponent
  ],
  providers: []
})

export class DashBoardModule {
  constructor() { }

}