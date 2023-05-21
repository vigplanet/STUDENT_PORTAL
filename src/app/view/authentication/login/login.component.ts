import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,AfterViewInit {
  form: FormGroup={} as FormGroup;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private router:Router,private apiService:ApiService,private notificationService:NotificationService) {
    this.apiService.logout();
   }

  ngOnInit(): void {
    console.log('ccccc');
    this.form = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required
          ]
        ],
        password: [
          '',
          [
            Validators.required
          ]
        ]
      }
    );
  }
  ngAfterViewInit(){
    this.apiService.logout();
  }
  get loginform(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  login(){

    if (this.form.invalid) {
      return;
    }

    const req={
      "username": this.loginform["username"].value,
      "password":this.loginform["password"].value,
    };
     this.apiService.getStudentLogin(req).subscribe({next:(result:any)=>{
      if (result && result.status == 200 && result.body.results.status != "Failed") {
        try {
          console.log('redirect',result);
          if(result.body && result.body.results){
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href='/';
            return false;
          }
        } catch (successEx) {
          this.notificationService.error('error_', 'error_occured_try_again');
          console.error('ex', successEx);
        }
      } else {
        this.notificationService.error('error_', 'Authentication Failed');
      }
    }, error:err => {
      this.notificationService.error('error_', 'error_occured_try_again');
    },
    complete:() => {
      // Do stuff after completion
    }});
  }
}
