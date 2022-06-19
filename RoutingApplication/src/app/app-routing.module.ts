import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child.component';
import { EmployeeDetailsComponent } from './employee-details.component';
import { FirstComponent } from './first.component';
import { HomeComponent } from './home.component';
import { LogInComponent } from './log-in.component';
import { PathNotFoundComponent } from './path-not-found.component';
import { SecondComponent } from './second.component';

const routes: Routes = [
  {
    path: 'first', component: FirstComponent,
    children: [{ path: 'child', component: ChildComponent }],
  },
  { path: 'second', component: SecondComponent },
  { path: 'login', component: LogInComponent },
  { path: 'home/:msg', component: HomeComponent },
  {path:'employee',component:EmployeeDetailsComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PathNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
