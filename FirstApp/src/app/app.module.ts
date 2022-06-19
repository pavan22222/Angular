import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DirectivesComponent } from './directives/directives.component';
import { DataBindingComponent } from './data-binding.component';
import { BackgroundColorDirective } from './background-color.directive';
import { EmployeeComponent } from './employee.component';
import { NumbertoStringPipe } from './numbertostring.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DirectivesComponent,
    DataBindingComponent,
    BackgroundColorDirective,
    EmployeeComponent,
    NumbertoStringPipe
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
