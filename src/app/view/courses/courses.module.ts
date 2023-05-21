import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { AllCoursesComponent } from './all/all.component';
import { CommonModule } from '@angular/common';
import { CourseDetailComponent, } from './course/course.component';
@NgModule({
    declarations: [
        CoursesComponent,        
        AllCoursesComponent,
        CourseDetailComponent,
    ],
    imports: [
        SharedModule,        
        CoursesRoutingModule    
    ],
    exports: [        
      
    ],
    providers: [
    ]
})
export class CoursesModule { }
