import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { VideostudyRoutingModule } from './videostudy-routing.module';
import { categorylistComponent } from './categorylist/categorylist.component';
import { VideoListComponent } from './videolist/videolist.component';
import { CommonModule } from '@angular/common';
import { VideostudyComponent } from './videostudy.component';
@NgModule({
    declarations: [
        categorylistComponent,        
        VideoListComponent,
        VideostudyComponent,
    ],
    imports: [
        SharedModule,        
        VideostudyRoutingModule    
    ],
    exports: [        
      
    ],
    providers: [
    ]
})
export class VideostudyModule { }
