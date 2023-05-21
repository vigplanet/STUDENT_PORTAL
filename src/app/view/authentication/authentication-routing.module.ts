import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { FrogotPasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './resetpassword/resetpassword.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    component:AuthenticationComponent
  },
  {
    path: 'login',
    pathMatch: 'full',
    component:LoginComponent
  },
  {
    path: 'forgotpassword',
    pathMatch: 'full',
    component:FrogotPasswordComponent
  },
  {
    path: 'register',
    pathMatch: 'full',
    component:RegisterComponent
  }
  , {
    path: 'resetpassword',
    pathMatch: 'full',
    component:ResetPasswordComponent
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }