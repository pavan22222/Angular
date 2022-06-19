import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  myForm=this.fb.group({
    name:this.fb.control('',Validators.required),
    aliases:this.fb.array([
      this.fb.control(''),
    ])
  });

 

  
  constructor(private fb:FormBuilder) { }

  

  ngOnInit(): void {
    this.aliases.push(this.fb.control(''));
  }

  register(form:any){
  }

  addControl(){
    this.aliases.push(this.fb.control(''));
  }

  get aliases() {
    return this.myForm.get('aliases') as FormArray;
  }

}
