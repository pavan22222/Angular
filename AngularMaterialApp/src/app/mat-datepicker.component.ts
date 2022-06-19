import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mat-datepicker',
  templateUrl: './mat-datepicker.component.html',
  styleUrls: ['./mat-datepicker.component.css']
})
export class MatDatepickerComponent implements OnInit {

  constructor() { }
  date:Date=new Date();

  campaignOne=new FormGroup({
    start:new FormControl('',Validators.required),
    end:new FormControl('',Validators.required)
  });

  ngOnInit(): void {
  }

}
