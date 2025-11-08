export const DEFAULT_TOAST_FILE = [
  {
    name: 'example.component.html',
    content: [
      '<ngx-eg-button [label]="\'Default\'" (click)="showDefault()"></ngx-eg-button>'
    ]
  },
  {
    name: 'example.component.ts',
    content: [
      'import { Component } from \'@angular/core\';',
      'import { NgxEgToastService, NgxEgButton } from \'ngx-eg-app\';',
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
      'public showDefault(): void {',
      'this.toast.show({ message: \'Toast default\' });',
      '}',
      '}'
    ]
  }
];