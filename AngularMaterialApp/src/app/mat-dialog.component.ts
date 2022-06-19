import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatCardComponent } from './mat-card.component';
import { MatDialogExampleComponent } from './mat-dialog-example.component';
import {MatMenuTrigger} from '@angular/material/menu';
@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.css']
})
export class MatDialogComponent implements OnInit {
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;
  cricketer:any;
  name:any;
  animal:any;
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    const dialogRef =this.dialog.open(MatDialogExampleComponent,
      {data:{
        view:'first'
      }});
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result);
    })
  }

  openSmallDialog(){
    const dialogRef =this.dialog.open(MatDialogExampleComponent,{
      width:'200px',
      height:'200px',
      data:{cricketer:this.cricketer,
            view:'second'
    }
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result);
    })
  }

  openDialog1(){
    const dialogRef=this.dialog.open(MatDialogExampleComponent,{
      data:{
        name:this.name
      }
    })
    dialogRef.afterClosed().subscribe(result=> this.animal=result)

  }

 

}
