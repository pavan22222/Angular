import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatrialModule } from './matrial.module';
import { ButtonMaterialComponent } from './button-material.component';
import { MatButtonToggleComponent } from './mat-button-toggle.component';
import { MatBadgeComponent } from './mat-badge.component';
import { TypographyComponent } from './typography.component';
import { MatToolbarComponent } from './mat-toolbar.component';
import { MatAutoCompleteComponent } from './mat-auto-complete.component';
import { MatCardComponent } from './mat-card.component';
import { MatCheckboxComponent } from './mat-checkbox.component';
import { MatChipsComponent } from './mat-chips.component';
import { MatDatepickerComponent } from './mat-datepicker.component';
import { MatDialogComponent } from './mat-dialog.component';
import { MatDialogExampleComponent } from './mat-dialog-example.component';
import { MatFormFieldComponent } from './mat-form-field.component';
import { MatExpansionPanelComponent } from './mat-expansion-panel.component';
import { MatGridListComponent } from './mat-grid-list.component';
import { MatInputComponent } from './mat-input.component';
import { MatListComponent } from './mat-list.component';
import { MatMenuComponent } from './mat-menu.component';
import { MatProgressBarComponent } from './mat-progress-bar.component';
import { MatProgressSpinnerComponent } from './mat-progress-spinner.component';
import { MatRadioButtonComponent } from './mat-radio-button.component';
import { MatRippleComponent } from './mat-ripple.component';
import { MatSlideToggleComponent } from './mat-slide-toggle.component';
import { MatSliderComponent } from './mat-slider.component';
import { MatSnackBarExampleComponent } from './mat-snack-bar-example.component';
import { MatSnackBarComponent } from './mat-snack-bar.component';
import { MatSortComponent } from './mat-sort.component';
import { MatStepperComponent } from './mat-stepper.component';
import { MatTableComponent } from './mat-table.component';
import { MatTabsComponent } from './mat-tabs.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTooltipComponent } from './mat-tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonMaterialComponent,
    MatButtonToggleComponent,
    MatBadgeComponent,
    TypographyComponent,
    MatToolbarComponent,
    MatAutoCompleteComponent,
    MatCardComponent,
    MatCheckboxComponent,
    MatChipsComponent,
    MatDatepickerComponent,
    MatDialogComponent,
    MatDialogExampleComponent,
    MatFormFieldComponent,
    MatExpansionPanelComponent,
    MatGridListComponent,
    MatInputComponent,
    MatListComponent,
    MatMenuComponent,
    MatProgressBarComponent,
    MatProgressSpinnerComponent,
    MatRadioButtonComponent,
    MatRippleComponent,
    MatSlideToggleComponent,
    MatSliderComponent,
    MatSnackBarExampleComponent,
    MatSnackBarComponent,
    MatSortComponent,
    MatStepperComponent,
    MatTableComponent,
    MatTabsComponent,
    MatTooltipComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatrialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
