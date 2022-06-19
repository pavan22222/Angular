import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators,FormBuilder} from '@angular/forms';
import { ageValidator, emailValidator } from './validatior';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  
  myFormObj:{}={};
  emailValidation:string='';
  objHidden=true;
  myForm:FormGroup =new FormGroup(
    {
      name:new FormControl('',[Validators.required,Validators.minLength(4)]),
      age:new FormControl('',[ageValidator,Validators.required]),
      mobile:new FormControl('',Validators.required),
      email:new FormControl('',emailValidator),
    }
  );

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(form:any){
    this.myFormObj=form.value;
    let regExp=new RegExp("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")
    if(!regExp.test(form.value['email'])){
       this.emailValidation="Invalid Mail Address";
      return ;
    } else {
      this.objHidden=false;
      this.emailValidation='';
    }
  }

}
