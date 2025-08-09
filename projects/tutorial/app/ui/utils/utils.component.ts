import { Component, ViewChild } from '@angular/core';
import { MaskPipe, NgxEgTimer } from 'ngx-eg-app';

@Component({
  selector: 'app-utils',
  imports: [NgxEgTimer, MaskPipe],
  templateUrl: './utils.component.html'
})
export class UtilsComponent {

  @ViewChild('timer') public timer!: NgxEgTimer;

  public timeOut():void {
    this.timer.start();
  }
}
