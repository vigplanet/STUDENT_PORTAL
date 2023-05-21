import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProfessorsComponent } from './view/professors/professors.component';
import { TimerComponent } from './components/timer/timer.component';
import { FormsModule } from '@angular/forms';
import { MyLoaderComponent } from './components/my-loader/my-loader.component';
import { LoaderService } from './service/loader.service';
import { LoaderInterceptor } from './service/loader-interceptor.service';
import { NgInitDirective } from './directive/ng-init';
import { IndexComponent } from './view/index/index.component';
import { SharedModule } from './shared/shared.module';
import { DefaultUrlSerializer, UrlSerializer, UrlTree} from '@angular/router';
    
export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
    parse(url: string): UrlTree {
        // Optional Step: Do some stuff with the url if needed.

        // If you lower it in the optional step 
        // you don't need to use "toLowerCase" 
        // when you pass it down to the next function
        return super.parse(url.toLowerCase()); 
    }
}
@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    MyLoaderComponent,
    NgInitDirective,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule 
  ],
  exports:[TimerComponent,NgInitDirective],
  providers: [
    {
      provide: UrlSerializer,
      useClass: LowerCaseUrlSerializer
  },
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
