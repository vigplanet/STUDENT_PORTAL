import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import {  StaffProfileComponent } from './profile/profile.component';
import { StaffsRoutingModule } from './staffs-routing.module';
import {StaffsComponent } from './staffs.component';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        StaffsComponent,
        StaffProfileComponent
    ],
    imports: [
        SharedModule,
        StaffsRoutingModule
    ],
    exports: [
        
    ],
    providers: [
    ]
})
export class StaffssModule { }
