import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './service/auth.guard.service';
import { IndexComponent } from './view/index/index.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
    
  },
  {
    path: 'index',
    component: IndexComponent,            
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  { path: 'professors', loadChildren: () => import('./view/professors/professors.module').then(m => m.ProfessorsModule) ,canLoad: [ AuthGuard ],canActivate: [AuthGuard]},
  { path: 'staffs', loadChildren: () => import('./view/staffs/staffs.module').then(m => m.StaffssModule) ,canLoad: [ AuthGuard ],canActivate: [AuthGuard]},
  { path: 'students', loadChildren: () => import('./view/students/students.module').then(m => m.StudentsModule),canLoad: [ AuthGuard ],canActivate: [AuthGuard] },
  { path: 'library', loadChildren: () => import('./view/library/library.module').then(m => m.LibraryModule) ,canLoad: [ AuthGuard ],canActivate: [AuthGuard]},
  { path: 'admin', loadChildren: () => import('./view/admin/admin.module').then(m => m.AdminModule) ,canLoad: [ AuthGuard ],canActivate: [AuthGuard]},
  { path: 'courses', loadChildren: () => import('./view/courses/courses.module').then(m => m.CoursesModule),canLoad: [ AuthGuard ],canActivate: [AuthGuard] },
  { path: 'testseries', loadChildren: () => import('./view/testseries/testseries.module').then(m => m.TestSeriesModule),canLoad: [ AuthGuard ],canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./view/authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'results', loadChildren: () => import('./view/result/result.module').then(m => m.ResultsModule) ,canLoad: [ AuthGuard ],canActivate: [AuthGuard]},
  { path: 'testrank', loadChildren: () => import('./view/testrank/testrank.module').then(m => m.ResultsModule) ,canLoad: [ AuthGuard ],canActivate: [AuthGuard]},
  { path: 'videostudy', loadChildren: () => import('./view/videostudy/videostudy.module').then(m => m.VideostudyModule),canLoad: [ AuthGuard ],canActivate: [AuthGuard] },
  {
    path: '**',
    redirectTo: 'index'

  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { useHash: false, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }