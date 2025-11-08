import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ONE_SECOND, ZERO } from '../../public-api';

@Injectable()
export class CountDownService {

  public _timing = ZERO;
  public secondsLeft = new BehaviorSubject<number>(ZERO);
  private interval: any | null = null;

  public start(seconds: number): void {
    if (!!!seconds) {
      return;
    }

    this.stop();
    this.secondsLeft.next(seconds);
    this._timing = seconds;

    this.interval = setInterval(() => {
      this._timing--;
      this.secondsLeft.next(this._timing);
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
    this.secondsLeft.next(ZERO);
  }
}
