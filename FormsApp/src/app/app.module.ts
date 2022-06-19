import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details.component';
import { ReactiveFormsComponent } from './reactive-forms.component';
import { FormBuilderComponent } from './form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    ReactiveFormsComponent,
    FormBuilderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
