import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftSideBarComponent } from './leftsidebar/leftsidebar.component';
import { RightSideBarComponent } from './rightsidebar/rightsidebar.component';
import { NavigationMenuComponent } from './navigationmenu/navigationmenu.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
      HeaderComponent,
      LeftSideBarComponent,
      RightSideBarComponent,
      FooterComponent,
      NavigationMenuComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule 
  ],
  exports:[
    HeaderComponent,
    LeftSideBarComponent,
    RightSideBarComponent,
    FooterComponent,
    NavigationMenuComponent,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class SharedModule { }
