export const BUTTON_SIZE_FILES = [
  {
    name: 'example.component.html',
    content: [
      '<ngx-eg-button [size]="small" [label]="label"></ngx-eg-button>',
      '',
      '<ngx-eg-button [size]="def" [label]="label"></ngx-eg-button>',
      '',
      '<ngx-eg-button [size]="large" [label]="label"></ngx-eg-button>',
      ''
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
      'public small = \'small\';',
      'public def = \'default\';',
      'public large = \'large\';',
      'public label = \'Botão\';',
      '',
      '}'
    ]
  }
];
