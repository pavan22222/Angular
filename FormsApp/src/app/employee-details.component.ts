import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  name:string='';
  phoneNumber:Number=new Number();
  email:string='';
  msg:string='';
  constructor() { }

  ngOnInit(): void {
  }

  onSave(form:any){

    if(form.value.phoneNumber){
    if (new String(this.phoneNumber).length<10){
      this.msg="Mobile No Too Short";
      return;
    }
      
    }
    if(form.errors){
      this.msg="Invalid Data";
      return;
    } else {
      this.msg="Registered";
      return;
    }

    
  }

}
