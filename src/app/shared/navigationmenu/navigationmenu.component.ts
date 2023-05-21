
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetSurveyQuestionListRequest } from 'src/app/model/getquetions.request';
import { SubmitSurvey } from 'src/app/model/request/sumitsurvey';
import { GetSurveyQuestion, GetSurveyQuestionList } from 'src/app/model/response/getserveyquetionslist';
import { GetSurveyDetail, SurveyDetail } from 'src/app/model/response/getsurveydetail';
import { ApiService } from 'src/app/service/api.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-navigationmenu',
  templateUrl: './navigationmenu.component.html',
  styleUrls: ['./navigationmenu.component.scss']
})
export class NavigationMenuComponent implements OnInit {
  constructor() {

  }
  ngOnInit(): void {
   
  }

}
