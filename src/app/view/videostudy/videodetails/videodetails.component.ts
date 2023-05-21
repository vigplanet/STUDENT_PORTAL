import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { NotificationService } from 'src/app/service/notification.service';
declare var jwplayer: any;

@Component({
  selector: 'app-videodetails',
  templateUrl: './videodetails.component.html',
  styleUrls: [ './videodetails.component.scss']
})
export class VideoDetailsComponent implements OnInit {
  public videolist:Array<any>=[];
  public urllinkvideo:any;
  constructor( private route: ActivatedRoute,private router:Router,private apiService:ApiService,private notificationService:NotificationService) { }

  ngOnInit() {
    
    this.getAllCourses();
         
      }
  

      getAllCourses(){
        const req={
          "msrno": 343,
          "videoid": this.route.snapshot.queryParams.videoid
        };
         this.apiService.getVideoStart(req).subscribe({next:(data:any)=>{
          if (data && data.results && data.results.status == "Success") {
           this.videolist= data.results.student_video_model_playlist;
          //  alert( this.videolist);
          //  alert( this.videolist[0].filePath);
          
          
          } else {
            this.notificationService.error('error_', 'Some Error Occur');
          }
        }, error:err => {
          this.notificationService.error('error_', 'error_occured_try_again');
        },
        complete:() => {

           
//Player Code start

          console.log('assssssssssssssssssssssssss')
          const playerJw = jwplayer('player').setup({
            title: 'Player Test',
            //playlist: 'https://cdn.jwplayer.com/v2/media/8L4m9FJB',
            file:this.videolist[0].filePath,
            width: 640,
            height: 360,
            aspectratio: '16:9',
            mute: false,
            autostart: true,
            primary: 'html5',
          });
        }});

//Player Code end

      }

}
