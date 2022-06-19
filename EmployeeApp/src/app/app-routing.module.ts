import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{EmployeeRegisterComponent} from'./employee-register.component';
import{EmployeeListComponent} from './employee-list.component'
import { UpdateEmployeeComponent } from './update-employee.component';

const routes: Routes = [
 
  {path:'create',component:EmployeeRegisterComponent},
  {path:'list',component:EmployeeListComponent},
  {path:'update',component:UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
