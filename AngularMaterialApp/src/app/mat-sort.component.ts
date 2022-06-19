import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-sort',
  templateUrl: './mat-sort.component.html',
  styleUrls: ['./mat-sort.component.css']
})
export class MatSortComponent implements OnInit {

  constructor() { }

  employees=[
    {id:1,name:'Pavan Janapati',age:23},
    {id:2,name:'Naveen Angati',age:24},
    {id:3,name:'Srikanth Malladi',age:23}
  ]

  ngOnInit(): void {
  }

}
