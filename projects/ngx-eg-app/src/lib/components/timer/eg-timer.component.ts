import { ChangeDetectionStrategy, ChangeDetectorRef, Component, effect, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { CountDownService, secondsLeft, timerIsRunning } from '../../../shared/services/count-down.service';
import { SIXTY } from '../../utils/magic-number';

@Component({
  selector: 'ngx-eg-timer',
  imports: [],
  templateUrl: './eg-timer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxEgTimer implements OnInit, OnDestroy {

  @Output() public timeOut: EventEmitter<void> = new EventEmitter();

  @Input() public label = '';
  @Input() public time: number = SIXTY;

  public secondsLeft = SIXTY;
  private readonly countDown = new CountDownService();

  constructor(private readonly cdr: ChangeDetectorRef) {
    effect(() => {
      this.secondsLeft = secondsLeft();
      this.cdr.markForCheck();
      if (!timerIsRunning()) {
        this.timeOut.emit();
      }
    });
  }

  public ngOnInit(): void {
    this.start();
  }

  public ngOnDestroy(): void {
    this.countDown.stop();
  }

  public start(): void {
    this.countDown.start(this.time);
  }
}
