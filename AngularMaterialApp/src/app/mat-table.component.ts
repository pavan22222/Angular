import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any> | undefined;
  employees=[
    {id:1,name:'Pavan Janapati',age:23},
    {id:2,name:'Naveen Angati',age:24},
    {id:3,name:'Srikanth Malladi',age:23}
  ]

  displayedColumns: string[] = ['id', 'name', 'age'];
  constructor() { }

  ngOnInit(): void {
  }

  addRecord(){
    this.employees.push({id:Math.floor(Math.random()*10),name:'Pavan',age:20});
    this.table?.renderRows();
  }

  removeRecord(){
    this.employees.pop();
    this.table?.renderRows();
  }

  addColumn(){
    this.displayedColumns.push("Position");
    this.employees.forEach(data=>{
     // data[4]="developer";
    });
    
  }

  removeColumn(){
    this.displayedColumns.pop();
    this.table?.renderRows();
  }

}
