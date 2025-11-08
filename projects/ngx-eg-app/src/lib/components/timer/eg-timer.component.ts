import { ChangeDetectionStrategy, ChangeDetectorRef, Component, effect, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { CountDownService } from '../../../shared/services/count-down.service';
import { SIXTY } from '../../utils/magic-number';

@Component({
  selector: 'ngx-eg-timer',
  imports: [],
  templateUrl: './eg-timer.component.html',
  providers: [CountDownService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxEgTimer implements OnInit, OnDestroy {

  @Output() public timeOut: EventEmitter<void> = new EventEmitter();

  @Input() public label = '';
  @Input() public time: number = SIXTY;

  public secondsLeft = SIXTY;
  
  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly countDown: CountDownService
  ) {
    effect(() => {
      this.secondsLeft = this.countDown.secondsLeft;
      this.cdr.markForCheck();
      if (!this.countDown.timerIsRunning) {
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
