import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  classes: object = {};
  course: string;
  display = false;
  value = 1;
  courses: Array<String> = [];
  colorName='yellow';
  constructor() {
    this.classes = {
      'font-size': '30px',
      'font-weigt': 'bold',
      color: 'red',
    };

    this.courses = ['B.Tech', 'M.B.A', 'Degree'];

    this.course = 'select';
  }

  getColour() {
    return 'red';
  }

  ngOnInit(): void {}

  select(value: any) {
    this.display = true;
    console.log(value);
  }
}
function getColour() {
  throw new Error('Function not implemented.');
}
