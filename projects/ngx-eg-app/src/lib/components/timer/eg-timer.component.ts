import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';

import { ONE_SECOND, SIXTY, ZERO } from '../../utils/magic-number';

@Component({
  selector: 'ngx-eg-timer',
  imports: [],
  templateUrl: './eg-timer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxEgTimer {

  @Output() public timeOut: EventEmitter<void> = new EventEmitter();

  @Input() public label = '';
  @Input() public initialTime: number = SIXTY;

  public secondsLeft = SIXTY;
  private timerInterval: any;

  constructor(private readonly cdr: ChangeDetectorRef) { }

  public ngOnInit(): void {
    this.startCountdown();
  }

  public ngOnDestroy(): void {
    clearInterval(this.timerInterval);
  }

  public startCountdown(): void {
    this.secondsLeft = this.initialTime || this.secondsLeft;

    this.timerInterval = setInterval(() => {
      this.secondsLeft--;

      if (this.secondsLeft <= ZERO) {
        clearInterval(this.timerInterval);
        this.timeOut.emit();
      }
      this.cdr.markForCheck();
    }, ONE_SECOND);
  }
}
