import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AllTestSeriesComponent } from './all/all.component';
import { TestSeriesRoutingModule } from './testseries-routing.module';
import { TestSeriesComponent } from './testseries.component';
@NgModule({
    declarations: [
        TestSeriesComponent,        
        AllTestSeriesComponent
    ],
    imports: [
        SharedModule,        
        TestSeriesRoutingModule    
    ],
    exports: [        
      
    ],
    providers: [
    ]
})
export class TestSeriesModule { }
