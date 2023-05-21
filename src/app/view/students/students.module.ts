import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentProfileComponent } from './profile/profile.component';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { CommonModule } from '@angular/common';
import { AddstudentsComponent } from './addstudents/addstudents.component';
@NgModule({
    declarations: [
        StudentsComponent,
        StudentProfileComponent,
        AddstudentsComponent
    ],
    imports: [
        SharedModule,
        StudentsRoutingModule
    ],
    exports: [
        
    ],
    providers: [
    ]
})
export class StudentsModule { }
