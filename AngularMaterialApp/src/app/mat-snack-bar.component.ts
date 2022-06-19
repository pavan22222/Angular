import { Component, OnInit } from '@angular/core';
import{MatSnackBar} from '@angular/material/snack-bar'
import { MatSnackBarExampleComponent } from './mat-snack-bar-example.component';

@Component({
  selector: 'app-mat-snack-bar',
  templateUrl: './mat-snack-bar.component.html',
  styleUrls: ['./mat-snack-bar.component.css']
})
export class MatSnackBarComponent implements OnInit {

  constructor(private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  onSnackBar(){
    this.snackBar.openFromComponent(MatSnackBarExampleComponent, {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
    
  }

  onSnackBar1(){
    this.snackBar.open("Hello","Pavan",{duration:1000});
  }

}
