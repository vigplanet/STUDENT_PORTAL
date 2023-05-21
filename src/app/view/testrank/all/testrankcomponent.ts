import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-testrank',
  templateUrl: './testrank.component.html',
  styleUrls: ['./testrank.component.scss']
})
export class TestRanksComponent implements OnInit {
  // public Result:Array<any>=[];
  // public ResultTopper:Array<any>=[];
  public ExamList:Array<any>=[];
  
  constructor(private route: ActivatedRoute,private router:Router,private apiService:ApiService,private notificationService:NotificationService) { }

  ngOnInit(): void {
    console.log('ccccc');
   //this.getResult();
   //this.getResultTopper();
   this.getExamList();
  }
  
  // getResult(){
  //   const req={
  //     "action": "view",
  //     "surveyid": this.route.snapshot.queryParams.surveyid || 0
  //   };
  //    this.apiService.getStudentSurveyResult(req).subscribe({next:(data:any)=>{
  //     if (data && data.results && data.results.status == "Success") {
  //      this.Result= data.results.survey_exam_rank_model_list;
  //     } else {
  //       this.notificationService.error('error_', 'Some Error Occur');
  //     }
  //   }, error:err => {
  //     this.notificationService.error('error_', 'error_occured_try_again');
  //   },
  //   complete:() => {
  //     // Do stuff after completion
  //   }});
  // }

// getResultTopper(){
//   const req={
//     "action": "view",    
//     "surveyid": this.route.snapshot.queryParams.surveyid || 0
//   };
//    this.apiService.getStudentSurveyToppers(req).subscribe({next:(data:any)=>{
//     if (data && data.results && data.results.status == "Success") {
//      this.ResultTopper= data.results.survey_exam_rank_model_list;
//     } else {
//       this.notificationService.error('error_', 'Some Error Occur');
//     }
//   }, error:err => {
//     this.notificationService.error('error_', 'error_occured_try_again');
//   },
//   complete:() => {
//     // Do stuff after completion
//   }});
// }

getExamList(){
  const req={
    "action": "view"    
  };
   this.apiService.getStudentExamList(req).subscribe({next:(data:any)=>{
    if (data && data.results && data.results.status == "Success") {
     this.ExamList= data.results.survey_exam_rank_model_list;
     console.warn(this.ExamList);
    } else {
      this.notificationService.error('error_', 'Some Error Occur');
    }
  }, error:err => {
    this.notificationService.error('error_', 'error_occured_try_again');
  },
  complete:() => {
    // Do stuff after completion
  }});
}

ShowDetails(surveyid:number){
  window.location.assign("http://localhost:4200/results?surveyid="+surveyid);
  //https://techstudy.vigplanet.com
}

}
