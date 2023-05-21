import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'profile',
    pathMatch: 'full',
    component:LibraryProfileComponent
  },
  {
    path: 'error',
    pathMatch: 'full',
    component:LibraryProfileComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrarysRoutingModule { }