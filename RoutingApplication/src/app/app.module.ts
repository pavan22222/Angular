import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';
import { LogInComponent } from './log-in.component';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { PathNotFoundComponent } from './path-not-found.component';
import { ChildComponent } from './child.component';
import { EmployeeDetailsComponent } from './employee-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    LogInComponent,
    HomeComponent,
    PathNotFoundComponent,
    ChildComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
