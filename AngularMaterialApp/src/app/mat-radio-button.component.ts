import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-radio-button',
  templateUrl: './mat-radio-button.component.html',
  styleUrls: ['./mat-radio-button.component.css']
})
export class MatRadioButtonComponent implements OnInit {

  genders=['Male','FeMale','Third Gender'];
  constructor() { }

  ngOnInit(): void {
  }

}
