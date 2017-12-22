import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppService } from './service/user.service';
import { DataService } from './service/data-sharing.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  {
    path: 'my', loadChildren: 'app/my/My.module#MyModule'
  },
  { path: "**", redirectTo: "login", pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    (RouterModule.forRoot(routes)),
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    RouterModule
  ],
  providers : [
    AppService,
    DataService
  ]
})
export class AppRoutingModule { }
