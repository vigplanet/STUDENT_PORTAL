import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentProfileComponent } from './profile/profile.component';
import{AddstudentsComponent} from './addstudents/addstudents.component';
const routes: Routes = [
  {
    path: 'profile',
    pathMatch: 'full',
    component:StudentProfileComponent
  },
  {
    path: 'addstudents',
    pathMatch: 'full',
    component:AddstudentsComponent
  },
  {
    path: 'error',
    pathMatch: 'full',
    component:StudentProfileComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }