
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GetSurveyQuestionListRequest } from 'src/app/model/getquetions.request';
import { SubmitSurvey } from 'src/app/model/request/sumitsurvey';
import { GetSurveyQuestion, GetSurveyQuestionList } from 'src/app/model/response/getserveyquetionslist';
import { GetSurveyDetail, SurveyDetail } from 'src/app/model/response/getsurveydetail';
import { ApiService } from 'src/app/service/api.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public apiService:ApiService,private router:Router,private cookieService:CookieService) {

  }
  ngOnInit(): void {
   
  }
  signout(){
    
    this.router.navigate(['/auth/login']).then(()=>{
      this.cookieService.delete('X-Auth');
      this.apiService.isLoggedIn();
      window.location.reload();
    })
  }

}
