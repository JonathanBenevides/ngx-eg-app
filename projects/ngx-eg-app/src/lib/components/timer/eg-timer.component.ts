import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';

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
    this.countDown.secondsLeft
      .pipe(
        distinctUntilChanged()
      )
      .subscribe((timing) => {
        this.secondsLeft = timing;
        this.cdr.markForCheck();
        if (!timing) {
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
