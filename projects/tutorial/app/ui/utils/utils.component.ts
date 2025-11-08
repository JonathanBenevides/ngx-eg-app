import { Component, ViewChild } from '@angular/core';
import { NgxEgTimer } from 'ngx-eg-app';

import { INITIAL_PRESENTATION } from './files/initial-presentation.constant';
import { PIPE_FILE } from './files/pipe.constant';
import { TIMER_FILE } from './files/timer.constant';
import { IMPORTS } from './utils.module';

@Component({
  selector: 'app-utils',
  imports: [IMPORTS],
  templateUrl: './utils.component.html'
})
export class UtilsComponent {

  @ViewChild('timer') public timer!: NgxEgTimer;

  public initialPresentation = INITIAL_PRESENTATION;
  public pipeDoc = PIPE_FILE;
  public timerDoc = TIMER_FILE;

  public showPipegDoc: boolean = false;
  public showTimerDoc: boolean = false;

  public timeOut():void {
    this.timer.start();
  }
}
