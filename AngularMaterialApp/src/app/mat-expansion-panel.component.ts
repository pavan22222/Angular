import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-mat-expansion-panel',
  templateUrl: './mat-expansion-panel.component.html',
  styleUrls: ['./mat-expansion-panel.component.css']
})
export class MatExpansionPanelComponent implements OnInit {

  @ViewChild(MatAccordion)
  accordion: any;
  name:any;
  company:any;
  step:any;
  constructor() { }

  ngOnInit(): void {
  }

  setStep(index:number){
    this.step=index;
  }

  next(){
    this.step++;
  }

  previous(){
    this.step--;
  }

}
