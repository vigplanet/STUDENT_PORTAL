import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'profile',
    pathMatch: 'full',
    component:ProfessorProfileComponent
  },
  {
    path: 'error',
    pathMatch: 'full',
    component:ProfessorProfileComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorsRoutingModule { }