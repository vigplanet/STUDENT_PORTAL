import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-professor-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfessorProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    console.log('ccccc');
   
  }
}
