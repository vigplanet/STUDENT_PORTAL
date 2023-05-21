import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: [ './videolist.component.scss']
})
export class VideoListComponent implements OnInit {
  public VideoList:Array<any>=[];
  constructor( private route: ActivatedRoute,private router:Router,private apiService:ApiService,private notificationService:NotificationService) { }

  ngOnInit(): void {
    this.getAllVideoList();
  }
  getAllVideoList(){
    const req={      
      "msrno": 1,
      "categoryid":this.route.snapshot.queryParams.catid || 0
    };
     this.apiService.getVideoList(req).subscribe({next:(data:any)=>{
      if (data && data.results && data.results.status == "Success") {
       this.VideoList= data.results.student_video_model_list;
console.warn(this.VideoList);
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

  ShowDetails(videoid:number){
    window.location.assign("http://localhost:4200/videostudy/videodetails?videoid="+videoid);
    //http://techstudy.vigplanet.com
  }

}
