import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id=20;
  msg:string | null='';
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.msg=this.route.snapshot.paramMap.get('msg');
  }

  getData(){
    this.router.navigate(['employee'])
  }

}
