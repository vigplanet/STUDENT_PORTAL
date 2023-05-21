import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfessorProfileComponent } from './profile/profile.component';
import { ProfessorsRoutingModule } from './professors-routing.module';
import { ProfessorsComponent } from './professors.component';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        ProfessorsComponent,
        ProfessorProfileComponent
    ],
    imports: [
        SharedModule,
        ProfessorsRoutingModule
    ],
    exports: [
        
    ],
    providers: [
    ]
})
export class ProfessorsModule { }
