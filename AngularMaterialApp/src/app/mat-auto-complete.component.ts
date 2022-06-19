import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mat-auto-complete',
  templateUrl: './mat-auto-complete.component.html',
  styleUrls: ['./mat-auto-complete.component.css'],
})
export class MatAutoCompleteComponent implements OnInit {
  constructor() {}

  stateGroup = [
    {
      letter: 'A',
      names: ['Andhra Pradesh', 'Assam'],
    },
    { letter: 'A', names: ['Andhra Pradesh', 'Assam'] },
    { letter: 'K', names: ['Kerala', 'Karnataka'] },
    { letter: 'T', names: ['Telangana', 'Tamilanadu'] },
  ];

  names=["Naveen","Pavan","Srikanth"];
  myForm=new FormGroup({
    name:new FormControl(),
  });

  ngOnInit(): void {}
}
