import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  index:any;
  i=0;
  name:any;
  age:any;
  email:any;
  employee:Employee=new Employee();
  constructor(private employeeService:EmployeeService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
      this.index=params.get('id');
      this.employeeService.employeeList.forEach(data=>{
        this.i++;
        if(this.i==this.index){
          this.employee=data;
          this.name=this.employee.name;
          this.age=this.employee.age;
          this.email=this.employee.email;
        }
      });
    }
      );
  }

  update(){
    this.i=0;
    this.employeeService.employeeList.forEach(data=>{
      this.i++;
        if(this.i==this.index){
         data.setName(this.name);
         data.setAge(this.age);
         data.setEmail(this.email);
        }
    })

    this.router.navigate(['list',{id:this.index-1}]);
  }

  goBack(){
    this.router.navigate(['list']);
  }

}
