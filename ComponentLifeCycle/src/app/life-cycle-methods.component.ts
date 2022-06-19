import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ContentChild, DoCheck, ElementRef, Input, OnDestroy, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-methods',
  templateUrl: './life-cycle-methods.component.html',
  styleUrls: ['./life-cycle-methods.component.css'],
})
export class LifeCycleMethodsComponent implements OnChanges, OnInit , DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input('name') name: any;
  @Input('age') age: any;
  @ContentChild('childTemp',{static:false}) salary:any;
  @ViewChild('company',{static:true}) company:ElementRef=new ElementRef(name);
  constructor() {
    console.log("Constructor()")
  }
   
  ngOnChanges(changes: SimpleChanges) {
    // const change1:SimpleChange=changes.name;
    // const change2:SimpleChange=changes.age;
    // console.log(`Previous Value::${change1.previousValue}....Current Value::${change1.currentValue}`);
    // console.log(`Previous Value::${change2.previousValue}....Current Value::${change2.currentValue}`);
    console.log("ngOnChanges()")
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log(
        `${propName}: currentValue = ${cur}, previousValue = ${prev}`
      );
    }
  }

  ngOnInit(): void {
   console.log("ngOnInit()  "+this.salary+"....."+this.company.nativeElement.value);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck()....."+this.company.nativeElement.value);
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit()  "+this.salary+"....."+this.company.nativeElement.value);
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked()  "+this.salary+"....."+this.company.nativeElement.value);
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit()  "+this.salary+"....."+this.company.nativeElement.value);
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked()  "+this.salary+"....."+this.company.nativeElement.value);
  }

  ngOnDestroy(){
    console.log("ngOnDestroy()  "+this.salary+"....."+this.company.nativeElement.value);
  }
}
