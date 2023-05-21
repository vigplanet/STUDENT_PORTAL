import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-allcourses',
  templateUrl: './all.component.html',
  styleUrls: []
})
export class AllCoursesComponent implements OnInit {
  public Courses:Array<any>=[];
  constructor(private apiService:ApiService,private notificationService:NotificationService) { }

  ngOnInit(): void {
    this.getAllCourses();
  }
  getAllCourses(){
    const req={
      "action": "view",
      "msrno": 67
    };
     this.apiService.getStudentSurveylist(req).subscribe({next:(data:any)=>{
      if (data && data.results && data.results.status == "Success") {
       this.Courses= data.results.survey_exam_model_list;
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
  exam(){
    window.location.assign("https://google.com");
  }
}
