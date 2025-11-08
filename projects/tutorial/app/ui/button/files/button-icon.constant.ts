export const BUTTON_ICON_FILES = [
  {
    name: 'example.component.html',
    content: [
      '<ngx-eg-button [icon]="icon"></ngx-eg-button>',
      '',
      '<ngx-eg-button [icon]="icon" [label]="label"></ngx-eg-button>',
      '',
      '<ngx-eg-button [icon]="icon" [label]="label"></ngx-eg-button>',
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
      'public icon = \'content_copy\';',
      'public label = \'Botão\';',
      '',
      '}'
    ]
  }
];
