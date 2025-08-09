import { Injectable, signal } from '@angular/core';

import { ONE_SECOND, ZERO } from '../../public-api';

export const timerIsRunning = signal(false);
export const secondsLeft = signal(ZERO);

@Injectable()
export class CountDownService {

  public secondsLeft = ZERO;
  private interval: any = null;

  public start(seconds: number): void {
    if (!!!seconds) {
      return;
    }

    secondsLeft.set(seconds);
    this.secondsLeft = seconds;
    timerIsRunning.set(true);

    this.interval = setInterval(() => {
      this.secondsLeft--;
      secondsLeft.set(this.secondsLeft);
      if (this.secondsLeft <= ZERO) {
        this.stop();
      }
    }, ONE_SECOND);
  }

  public stop(): void {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    timerIsRunning.set(false);
    secondsLeft.set(ZERO);
  }
}
