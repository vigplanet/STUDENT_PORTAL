import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import {TestRankComponent } from './testrank.component'
import { TestRankRoutingModule } from './testrank-routing.module';
import { TestRanksComponent } from './all/testrankcomponent';
@NgModule({
    declarations: [
        TestRanksComponent,
        TestRankComponent
    ],
    imports: [
        SharedModule,
        TestRankRoutingModule
    ],
    exports: [
        
    ],
    providers: [
    ]
})
export class ResultsModule { }
