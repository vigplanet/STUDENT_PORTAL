import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class StudentProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    console.log('ccccc');
   
  }
}
