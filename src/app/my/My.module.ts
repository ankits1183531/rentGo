import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyComponent } from "./my.component";
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { AuthGuard } from '../service/gaurd.service';
import { DataService } from '../service/data-sharing.service';
import { UserdetailsComponent } from '../userdetails/userdetails.component'; 

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '' , redirectTo  : 'dashboard' , pathMatch : 'full' },
      {
        path: '', component: MyComponent, canActivate: [AuthGuard], canDeactivate: [AuthGuard],
        children : [
          { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashBoardModule'},
          // { path: 'second', loadChildren: 'app/second-page/secong-page.module#SecondPageModuleComponent' },
        ]
      }
    ])
  ],
  exports : [],
  declarations : [
    MyComponent,
    FooterComponent,
    HeaderComponent,
    UserdetailsComponent
  ],
  providers : [
    AuthGuard ,
    DataService
  ]
})

export class MyModule {
  constructor() {}

}