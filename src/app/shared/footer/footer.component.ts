
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetSurveyQuestionListRequest } from 'src/app/model/getquetions.request';
import { SubmitSurvey } from 'src/app/model/request/sumitsurvey';
import { GetSurveyQuestion, GetSurveyQuestionList } from 'src/app/model/response/getserveyquetionslist';
import { GetSurveyDetail, SurveyDetail } from 'src/app/model/response/getsurveydetail';
import { ApiService } from 'src/app/service/api.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor() {

  }
  ngOnInit(): void {
   
  }

}
