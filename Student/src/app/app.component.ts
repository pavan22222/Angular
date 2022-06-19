import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student';
  colorName='red';
  selectedMonth:string='';
  months:Array<String>=["January","Febrauary","March"];


  onChange(month: any){
    this.selectedMonth=month;
    alert(this.selectedMonth);
  }

  onClick(){
    alert("onClick EVent");
  }
}
