import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-mat-tooltip',
  templateUrl: './mat-tooltip.component.html',
  styleUrls: ['./mat-tooltip.component.css']
})
export class MatTooltipComponent implements OnInit {

  constructor() { }

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  ngOnInit(): void {
  }

}
