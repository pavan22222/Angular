import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeRegisterComponent } from './employee-register.component';
import { EmployeeListComponent } from './employee-list.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegisterComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
