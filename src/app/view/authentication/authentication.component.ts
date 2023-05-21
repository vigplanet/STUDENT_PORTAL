
import { Component, HostListener, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  constructor(private apiService:ApiService) {
    console.log('sdsdsdsd');
    this.apiService.logout();
  }
  ngOnInit(): void {
  
  }


}
