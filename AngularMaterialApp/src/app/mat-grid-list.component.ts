import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-grid-list',
  templateUrl: './mat-grid-list.component.html',
  styleUrls: ['./mat-grid-list.component.css']
})
export class MatGridListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tiles=[
    {
      backgroundColor:'green',
      rows:1,
      cols:2,
      text:'One'
    } ,

    {
      backgroundColor:'cyan',
      rows:1,
      cols:2,
      text:'Two'
    } ,

    {
      backgroundColor:'orange',
      rows:2,
      cols:2,
      text:'Three'
    } ,

    {
      backgroundColor:'pink',
      rows:2,
      cols:2,
      text:'Four'
    }
  ]

}
