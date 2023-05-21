import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RegisterComponent } from './register/register.component';
import { FrogotPasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetPasswordComponent } from './resetpassword/resetpassword.component';
import { RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
@NgModule({
    declarations: [
        AuthenticationComponent,
        LoginComponent,
        RegisterComponent,
        FrogotPasswordComponent,
        ResetPasswordComponent
    ],
    imports: [
        SharedModule,
        AuthenticationRoutingModule
    ],
    exports: [
        SharedModule
    ],
    providers: [
    ]
})
export class AuthenticationModule { }
