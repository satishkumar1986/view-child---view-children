import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  message;
  count = 0;

  @Input() name;

  constructor() { }

  ngOnInit(): void {
  }

  increaseByOne() {    
    this.count = this.count + 1;
    this.message = this.count;
  }

  decreaseByOne() {
    this.count = this.count - 1;
    this.message = this.count;
  }

}
