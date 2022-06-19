import { Component, ElementRef, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMaterialApp';
  name:any;
  myControl=new FormControl('');
  names=["Naveen","Srikanth","Pavan"];
}
