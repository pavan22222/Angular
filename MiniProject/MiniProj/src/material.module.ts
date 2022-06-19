import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import{MatCardModule} from  "@angular/material/card";
import {MatInputModule} from "@angular/material/input"
import {MatTabsModule} from "@angular/material/tabs"
import {MatIconModule} from "@angular/material/icon"
import {MatButtonModule} from "@angular/material/button"
import {MatToolbarModule} from "@angular/material/toolbar"

@NgModule({
    
    imports: [
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatTabsModule,
        MatIconModule,
        MatButtonModule
    ],

    exports:[
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatTabsModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule
    ]
   
  })
export class MaterialModule {
}
