import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-allcategorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: []
})
export class categorylistComponent implements OnInit {
  public CategoryList:Array<any>=[];
  constructor(private apiService:ApiService,private notificationService:NotificationService) { }

  ngOnInit(): void {
    this.getAllCategoryList();
  }
  getAllCategoryList(){
    const req={
      "action": "string",
      "msrno": 1
    };
     this.apiService.getVideoCategory(req).subscribe({next:(data:any)=>{
      if (data && data.results && data.results.status == "Success") {
       this.CategoryList= data.results.student_category_model_list;
      console.warn(data.results.student_category_model_list);
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

  ShowDetails(categoryid:number){
    window.location.assign("http://localhost:4200/videostudy/videolist?catid="+categoryid);
    //http://techstudy.vigplanet.com
  }
}
