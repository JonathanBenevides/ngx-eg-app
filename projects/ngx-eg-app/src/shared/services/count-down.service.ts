import { Injectable } from '@angular/core';

import { ONE_SECOND, ZERO } from '../../public-api';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CountDownService {

  public _timing = ZERO;
  public _secondsLeft = ZERO;
  public timerIsRunning = new BehaviorSubject<boolean | null>(null);
  private interval: any | null = null;

  public get secondsLeft(): number {
    return this._secondsLeft;
  }

  public start(seconds: number): void {
    if (!!!seconds) {
      return;
    }

    this.stop();
    this._secondsLeft = seconds;
    this._timing = seconds;
    this.timerIsRunning.next(true);

    this.interval = setInterval(() => {
      this._timing--;
      this._secondsLeft = this._timing;
      if (this._timing <= ZERO) {
        this.stop();
      }
    }, ONE_SECOND);
  }

  public stop(): void {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    this.timerIsRunning.next(false);
    this._secondsLeft = ZERO;
  }
}
