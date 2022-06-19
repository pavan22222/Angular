import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl="http://localhost:8080/";
  constructor(private http:HttpClient){

  }

  checkCredentials():Observable<any>{
    return this.http.get("http://localhost:8080/vrnda/checkCredentials");
  }
}
