export const TIMER_FILE = [
  {
    name: 'example.component.html',
    content: [
      '<ngx-eg-timer #timer [time]="5" [label]=" \'Timer :\' " (timeOut)="timeOut()"></ngx-eg-timer>'
    ]
  },
  {
    name: 'example.component.ts',
    content: [
      'import { Component } from \'@angular/core\';',
      'import { NgxEgTimer } from \'ngx-eg-app\';',
      '',
      '@Component({',
      'selector: \'app-example\',',
      'imports: [NgxEgTimer],',
      'templateUrl: \'./example.component.html\'',
      '})',
      'export class ExampleComponent {',
      '',
      '@ViewChild(\'timer\') public timer!: NgxEgTimer;',
      '',
      'public timeOut():void {',
      'this.timer.start();',
      '}',
      '}'
    ]
  }
];