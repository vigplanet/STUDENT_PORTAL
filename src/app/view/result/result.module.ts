import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './result.component';
import { ResultsRoutingModule } from './result-routing.module';
import { ResultComponent } from './all/resultcomponent';
@NgModule({
    declarations: [
        ResultsComponent,
        ResultComponent
    ],
    imports: [
        SharedModule,
        ResultsRoutingModule
    ],
    exports: [
        
    ],
    providers: [
    ]
})
export class ResultsModule { }
