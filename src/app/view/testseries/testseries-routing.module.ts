import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTestSeriesComponent } from './all/all.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },
  {
    path: 'all',
    pathMatch: 'full',
    component:AllTestSeriesComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestSeriesRoutingModule { }