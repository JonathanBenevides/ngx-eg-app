export const TIMING_TOAST_FILE = [
  {
    name: 'example.component.html',
    content: [
      '<ngx-eg-button [label]="\'Timing\'" (click)="showTiming()"></ngx-eg-button>'
    ]
  },
  {
    name: 'example.component.ts',
    content: [
      'import { Component } from \'@angular/core\';',
      'import { NgxEgToastService, NgxEgButton, Theming } from \'ngx-eg-app\';',
      '',
      '@Component({',
      'selector: \'app-example\',',
      'imports: [NgxEgButton],',
      'templateUrl: \'./example.component.html\'',
      'providers: [NgxEgToastService],',
      '})',
      'export class ExampleComponent {',
      '',
      'constructor(private readonly toast: NgxEgToastService) { }',
      '',
      'public showTiming(): void {',
      'this.toast.show({',
      'message: \'Toast default\', type: Theming.primary, duration: 5000',
      '});',
      '}',
      '}'
    ]
  }
];