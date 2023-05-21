import { Component, Renderer2 } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public AuthenticationModule: Observable<boolean>;
  previousUrl: any;
  constructor(public apiService:ApiService,private render: Renderer2, private router: Router) {
    this.AuthenticationModule= this.apiService.isLoggedIn();
    this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationStart) {
          //for current page name
          let currentUrlSlug = "page_"+event.url.slice(1).split('/')[0];
          if (this.previousUrl) {
            this.render.removeClass(document.body, this.previousUrl);
          }
          if (currentUrlSlug) {
            this.render.addClass(document.body, currentUrlSlug);
          }
          this.previousUrl = currentUrlSlug;
        }
      }
    )
  }
  title = 'exam-portal';
}
