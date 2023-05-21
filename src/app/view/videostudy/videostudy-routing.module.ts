import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { categorylistComponent } from './categorylist/categorylist.component';
import { VideoListComponent } from './videolist/videolist.component';
import{ VideoDetailsComponent} from './videodetails/videodetails.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: 'categorylist',
    pathMatch: 'full'
  },
  {
    path: 'categorylist',
    pathMatch: 'full',
    component:categorylistComponent
  },
  {
    path: 'videodetails',
    pathMatch: 'full',
    component:VideoDetailsComponent
  },
  {
    path: ':id',
    pathMatch: 'full',
    component:VideoListComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideostudyRoutingModule { }