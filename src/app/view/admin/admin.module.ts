import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminProfileComponent } from './profile/profile.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        AdminComponent,
        AdminProfileComponent
    ],
    imports: [
        SharedModule,
        AdminRoutingModule
    ],
    exports: [
        
    ],
    providers: [
    ]
})
export class AdminModule { }
