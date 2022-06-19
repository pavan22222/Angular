import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  paramValue:string | null='';
  id=0;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.paramValue=this.route.snapshot.paramMap.get('id');
  }

  click(){
    this.router.navigate(['child',{id:20}],{relativeTo:this.route});
  }

}

