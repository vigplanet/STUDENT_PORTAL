import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCoursesComponent } from './all/all.component';
import { CourseDetailComponent } from './course/course.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },
  {
    path: 'all',
    pathMatch: 'full',
    component:AllCoursesComponent
  },
  {
    path: ':id',
    pathMatch: 'full',
    component:CourseDetailComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }