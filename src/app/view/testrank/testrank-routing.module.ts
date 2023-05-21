import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestRanksComponent } from './all/testrankcomponent';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },
  {
    path: 'all',
    pathMatch: 'full',
    component:TestRanksComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRankRoutingModule { }