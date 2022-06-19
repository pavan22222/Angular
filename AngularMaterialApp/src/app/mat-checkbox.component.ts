import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-checkbox',
  templateUrl: './mat-checkbox.component.html',
  styleUrls: ['./mat-checkbox.component.css']
})
export class MatCheckboxComponent implements OnInit {
  java:boolean=false;
  python:boolean=false;
  php:boolean=false;
  disable:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
