import { NgModule } from '@angular/core';
import{MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from'@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import{MatInputModule} from '@angular/material/input'
import{MatSelectModule} from '@angular/material/select'
import{MatRadioModule} from '@angular/material/radio'
import{ MatExpansionModule} from '@angular/material/expansion';
import{ MatGridListModule} from '@angular/material/grid-list';
import{ MatListModule} from '@angular/material/list';
import{ MatMenuModule} from '@angular/material/menu';
import{ MatProgressBarModule} from '@angular/material/progress-bar';
import{ MatSliderModule} from '@angular/material/slider';
import{ MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import{ MatRippleModule} from '@angular/material/core';
import{ MatSlideToggleModule} from '@angular/material/slide-toggle';
import{ MatSnackBarModule} from '@angular/material/snack-bar';
import{ MatSortModule} from '@angular/material/sort';
import{ MatStepperModule} from '@angular/material/stepper';
import{ MatTableModule} from '@angular/material/table';
import{ MatTabsModule} from '@angular/material/tabs';
import{ MatTooltipModule} from '@angular/material/tooltip';

const materialModules=[
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
 MatButtonToggleModule,
 MatBadgeModule,
 MatToolbarModule,
 MatAutocompleteModule,
 MatCardModule,
 MatCheckboxModule,
 MatChipsModule,
 MatDatepickerModule,
 MatNativeDateModule,
 MatFormFieldModule,
 MatDialogModule,
 MatInputModule,
 MatSelectModule,
 MatRadioModule,
 MatExpansionModule,
 MatGridListModule,
 MatListModule,
 MatMenuModule,
 MatProgressBarModule,
 MatSliderModule,
 MatProgressSpinnerModule,
 MatRippleModule,
 MatSlideToggleModule,
 MatSnackBarModule,
 MatSortModule,
 MatStepperModule,
 MatTableModule,
 MatTabsModule,
 MatTooltipModule
]

@NgModule({
  declarations: [],
  imports: [
    materialModules
  ],
  exports:[
    materialModules
  ]
})
export class MatrialModule { }
