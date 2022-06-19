import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router:Router) { }
  userName:string='';
  password:string='';
  validStatus:string='';
  colorValue='';
  credantialsArray=[
    {'userName':'Pavan','password':'pavan'}
  ]

  logIn(){
    this.credantialsArray.forEach(data => {
      if(data.userName === this.userName && data.password === this.password){
        this.validStatus="Loged In Successfully";
        this.colorValue='green'
        this.router.navigate(['home',"Hello pavan welcome to Home page"]);
      } else {
        this.validStatus="Invalid Credentials";
        this.colorValue='red'
      }
    }); 
  }
  ngOnInit(): void {
  }

}
