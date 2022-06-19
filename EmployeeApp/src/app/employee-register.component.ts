import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {
  name:string='';
  age:any | number;
  email:string='';
  msg:any;
  nameValidation1:any;
  nameValidation2:any;
  ageValidation1:any;
  ageValidation2:any;
  emailValidation1:any;
 emailValidation2:any;
 nameValidationMsg='';
 ageValidationMsg='';
 emailValidationMsg='';

  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    this.msg='';
    if(!this.name || this.name.length<5){
      if(!this.name){
        this.nameValidationMsg='Name Required';
        return;
      } else if(this.name.length<5){
        this.nameValidationMsg='Name must have more than 5 Characters';
        return;
      }
    } else {
      this.nameValidationMsg=''
    }
     
    if(!this.age || (this.age<0 || this.age >100)){
      if(!this.age){
        this.ageValidationMsg='Age Required';
        return;
      } else if(this.age<0 || this.age >100){
        this.ageValidationMsg='Age must be in-between 0-100';
        return;
      }
    } else{
      this.ageValidationMsg='';
    }
    
    if(!this.email || !new RegExp('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}').test(this.email)){
      if(!this.email){
        this.emailValidationMsg='Email Required';
        return;
      } else if(!new RegExp('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}').test(this.email)){
        this.emailValidationMsg='Invalid Email Address';
        return;
      }
    }else{
      this.emailValidationMsg='';
    }
    const emp=new Employee();
    emp.setName(this.name);
    emp.setAge(this.age);
    emp.setEmail(this.email);
    this.employeeService.employeeList.push(emp);
    this.msg="Registered Successfully"
    this.router.navigate(['/list']);
  }

}
