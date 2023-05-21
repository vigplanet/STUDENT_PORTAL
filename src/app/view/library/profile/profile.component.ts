import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-library-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class LibraryProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    console.log('ccccc');
   
  }
}
