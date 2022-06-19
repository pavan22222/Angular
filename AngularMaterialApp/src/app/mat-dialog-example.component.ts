import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-mat-dialog-example',
  templateUrl: './mat-dialog-example.component.html',
  styleUrls: ['./mat-dialog-example.component.css']
})
export class MatDialogExampleComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:DialogData) { }
   view:any;
   animal:any;

  ngOnInit(): void {
    this.view=this.data.view;
  }

}

export interface DialogData{
   cricketer:any;
   view:any;
   name:any
}
