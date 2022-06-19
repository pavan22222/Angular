import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import{MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const materials= [
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  BrowserAnimationsModule,
  
]

@NgModule({
  declarations: [],
  imports: [
    materials
  ],
   exports:[
    materials
  ]
})
export class MaterialModule { }
