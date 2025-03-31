import { Component, OnInit } from '@angular/core';
import { interval, scan, startWith, Subject, Subscription, switchMap, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-counter-app',
  standalone: true,
  imports: [],
  templateUrl: './counter-app.component.html',
  styleUrl: './counter-app.component.css'
})
export class CounterAppComponent implements OnInit {


  counter: number = 0;
  isRunning: boolean = false;
  speed: number = 1000; // Default speed (1 second)
  private intervalId: any = null; // To store the interval ID

  ngOnInit(): void {

  }

  startCounter() {
    if (!this.isRunning) {

      this.intervalId = setInterval(() => {
        this.counter++;
      }, this.speed)


    }





  }



  resumeCounter() {

    if (!this.isRunning) {
      this.startCounter()
    }



  }

  stopCounter() {
    if (this.isRunning) {
      this.isRunning = false;
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
 



    
  }

  resetCounter() {
    this.counter = 0;
    this.isRunning = false;
    clearInterval(this.intervalId)
  }

}