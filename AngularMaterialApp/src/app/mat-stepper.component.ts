import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mat-stepper',
  templateUrl: './mat-stepper.component.html',
  styleUrls: ['./mat-stepper.component.css']
})
export class MatStepperComponent implements OnInit {
  formGroupOne:FormGroup;
  formGroupTwo:FormGroup;

  constructor(private fb:FormBuilder) {
    this.formGroupOne=this.fb.group({
      name:['',Validators.required]
    })

    this.formGroupTwo=this.fb.group({
      mobile:['',Validators.required]
    })
   }

  ngOnInit(): void {
   
  }

}
