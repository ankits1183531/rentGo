import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckPageComponent } from './check-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: CheckPageComponent,
      }
    ]),
  ],
  exports: [],
  declarations: [
    CheckPageComponent
  ],
  providers: []
})

export class CheckPageModule {
  constructor() { }

}