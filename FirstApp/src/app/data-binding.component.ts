import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  name="Pavan";
  colorName="green";
  mobileNumber:Number=123;

  userName:string='';
  flag:boolean=false;

  ngOnInit(): void {
  }

  submit(){
    this.flag=true;
  }

}
