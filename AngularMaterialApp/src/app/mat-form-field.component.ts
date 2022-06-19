import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-form-field',
  templateUrl: './mat-form-field.component.html',
  styleUrls: ['./mat-form-field.component.css']
})
export class MatFormFieldComponent implements OnInit {
  name1:any;
  name2:any;
  name3:any;
  hide=true;
  color:any;

  constructor() { }

  ngOnInit(): void {
  }

}
