import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //@ViewChild('ename') ename:ElementRef;
  name:string='';
  color:string='cyan';
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  save(){
   // console.log(this.ename.nativeElement.value)
  }

}
