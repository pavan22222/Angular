import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-progress-bar',
  templateUrl: './mat-progress-bar.component.html',
  styleUrls: ['./mat-progress-bar.component.css']
})
export class MatProgressBarComponent implements OnInit {
  color:any;
  mode:any;
  value:any;
  bufferedValue:any;
  constructor() { }

  ngOnInit(): void {
  }

}
