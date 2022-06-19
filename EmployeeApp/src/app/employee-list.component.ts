import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  id:any;
  employees:Array<Employee>=new Array<Employee>();
  constructor(private employeeService:EmployeeService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.employees=this.employeeService.employeeList;
  }

  delete(index:any){
    this.employeeService.employeeList.splice(index,1);
  }
  update(index:any){
    this.router.navigate(['/update',{id:index+1}])
  }
}
