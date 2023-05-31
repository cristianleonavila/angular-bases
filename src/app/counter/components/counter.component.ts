import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  public title:string = '01 - CounterComponent';
  public counter:number = 0;

  increase() {
    this.counter++;
  }

  decrease () {
    this.counter--;
  }

  reset() {
    this.counter = 10;
  }
}


