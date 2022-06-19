import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mat-tabs',
  templateUrl: './mat-tabs.component.html',
  styleUrls: ['./mat-tabs.component.css']
})
export class MatTabsComponent implements OnInit {

  tabs=[
    {label:'First',content:'First Tab Content'},
    {label:'Second',content:'Second Tab Content'},
    {label:'Third',content:'Third Tab Content'},
  ]

  selectedIndex=new FormControl(0);

  constructor() { }

  ngOnInit(): void {
  }

  addTab(){
    this.tabs.push({label:'New Tab',content:'New Tab Content'})
  }

}
