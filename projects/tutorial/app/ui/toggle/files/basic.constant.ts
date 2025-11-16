export const BASIC_DOC_FILE = [
  {
    name: 'example.component.html',
    content: [
      '<ngx-eg-toggle [label]="\'left\'" [value]="selection" (change)="selection=$event"></ngx-eg-toggle>',
      '<div style="margin-top: 1rem;">Value: {{ selection }}</div>'
    ]
  },
  {
    name: 'example.component.ts',
    content: [
      'import { Component } from \'@angular/core\';',
      'import { NgxEgToggle } from \'ngx-eg-app\';',
      '',
      '@Component({',
      'selector: \'app-example\',',
      'imports: [NgxEgToggle],',
      'templateUrl: \'./example.component.html\'',
      '})',
      'export class ExampleComponent {',
      '',
      'public selection = true;',
      '',
      '}'
    ]
  }
];