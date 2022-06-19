import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mat-input',
  templateUrl: './mat-input.component.html',
  styleUrls: ['./mat-input.component.css']
})
export class MatInputComponent implements OnInit {

  constructor() { }

  emailControl=new FormControl('',[Validators.required,Validators.email])

  ngOnInit(): void {
  }

}
