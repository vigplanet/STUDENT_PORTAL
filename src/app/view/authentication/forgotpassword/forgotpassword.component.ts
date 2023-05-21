import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class FrogotPasswordComponent implements OnInit {
  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    console.log('ccccc');
   
  }
}
