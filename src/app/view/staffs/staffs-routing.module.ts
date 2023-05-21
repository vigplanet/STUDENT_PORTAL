import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  StaffProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'profile',
    pathMatch: 'full',
    component:StaffProfileComponent
  },
  {
    path: 'error',
    pathMatch: 'full',
    component:StaffProfileComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffsRoutingModule { }