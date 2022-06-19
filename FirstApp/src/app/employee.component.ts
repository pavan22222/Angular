import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  emp={id:1,name:"Pavan Janapati",salary:20000.00,designation:'Software Developer',dob:new Date('1999-05-27')};
  language:string='';
  object:{[key:number]:string}={1:"Naveen",2:"Pavan",3:"Srikanth"}
  map=new Map([[1,'Pavan'],[2,'Naveen'],[3,"Srikanth"]])
  percentage=78;
  name="Pavan Janapati";
  alphaNumber:number=0;;
  mapObject={
    '1':"Good Morning",
    '2': 'Bonjour', 
    '3': 'Buenos dÃƒÂ­as'
  }

  constructor() { }



  ngOnInit(): void {
  }

}
