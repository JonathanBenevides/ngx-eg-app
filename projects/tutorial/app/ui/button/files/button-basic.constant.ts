export const BASIC_BTN_FILES = [
  {
    name: 'example.component.html',
    content: [
      '<ngx-eg-button [label]="\'Basic\'" (click)="click()"></ngx-eg-button>',
    ]
  },
  {
    name: 'example.component.ts',
    content: [
      'import { Component } from \'@angular/core\';',
      'import { NgxEgButton } from \'ngx-eg-app\';',
      '',
      '@Component({',
      'selector: \'app-example\',',
      'imports: [NgxEgButton],',
      'templateUrl: \'./example.component.html\'',
      '})',
      'export class ExampleComponent {',
      '',
      'public click(): void {',
      'console.log(\'clicou\')',
      '}',
      '}'
    ]
  }
];
