import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { LibraryProfileComponent } from './profile/profile.component';
import { LibrarysRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        LibraryComponent,
        LibraryProfileComponent
    ],
    imports: [
        SharedModule,
        LibrarysRoutingModule
    ],
    exports: [
        
    ],
    providers: [
    ]
})
export class LibraryModule { }
