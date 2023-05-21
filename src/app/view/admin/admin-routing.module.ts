import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'profile',
    pathMatch: 'full',
    component:AdminProfileComponent
  },
  {
    path: 'error',
    pathMatch: 'full',
    component:AdminProfileComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }