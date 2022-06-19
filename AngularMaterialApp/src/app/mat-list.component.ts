import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-list',
  templateUrl: './mat-list.component.html',
  styleUrls: ['./mat-list.component.css']
})
export class MatListComponent implements OnInit {

  folders:Array<any>=new Array<any>();
  brands=['Adidas','Nike','Wolf'];
  brand:any;
  constructor() { }

  ngOnInit(): void {
    this.folders=[
      {
        name:'Images',
        date:new Date('12/12/2020')
      } ,
      {
        name:'Songs',
        date:new Date('06/28/2020')
      } ,
      {
        name:'Softwares',
        date:new Date('01/10/2021')
      }
    ]
  }

}
