import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = signal(10);

  increaseBy(value: number) {
    this.counter.update(val => val += value);
  }

  reset() {
    this.counter.set(0);
  }

}
