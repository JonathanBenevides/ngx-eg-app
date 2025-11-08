export const CUSTOM_CSS_TOAST_FILE = [
  {
    name: 'example.component.html',
    content: [
      '<ngx-eg-button [label]="\'Custom\'" (click)="showCustomCss()"></ngx-eg-button>'
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
      'public showCustomCss(): void {',
      'this.toast.show({ message: \'Custom css\', cssClass: \'custom\' });',
      '}',
      '}'
    ]
  },
  {
    name: 'example.component.css',
    content: [
      '.custom {',
      '',
      '}'
    ]
  }
];