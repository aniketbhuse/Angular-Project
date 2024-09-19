import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy, SimpleChanges } from '@angular/core';
 
@Component({
  selector: 'app-life-cycle-event',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-event.component.html',
  styleUrl: './life-cycle-event.component.css'
})
export class LifeCycleEventComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

   fristName: string;
   
  constructor(){
    console.log("constructor");
    this.fristName =""
  }
  ngOnInit(): void {
    console.log("ngOnInit"); // Used for APi call Trigger,After componemt load on page 
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }
  ngDoCheck(): void {
    console.log("DoCheck"); // used to change detection
  }
  ngAfterContentInit(): void {
    console.log("AfterContentInit"); // when we initialze external view in our component
  }
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked"); // when we initialze external view in our component
  }
  ngAfterViewInit(): void {
    console.log("AfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("OnDestroy"); // when we swtich from one page to another before that if we want to write a code we can write here
  }
}
