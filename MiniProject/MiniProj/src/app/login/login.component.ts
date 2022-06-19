import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Credentials } from 'src/beans/credentials';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentialsObj:Credentials=new Credentials();
  formGroup: FormGroup = new FormGroup(
    {userName:new FormControl("",Validators.required)
    ,password:new FormControl("",Validators.required)},
  );
  
  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
    
      
    }

    submit(event:any){
      this.credentialsObj.userName=event.userName;
      this.credentialsObj.password=event.password;
      this.empService.checkCredentials();
    }

}
