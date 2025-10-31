export const BUTTON_FORMAT_FILES = [
  {
    name: 'example.component.html',
    content: [
      '<ngx-eg-button [shape]="def" [label]="label"></ngx-eg-button>',
      '',
      '<ngx-eg-button [shape]="round" [label]="label"></ngx-eg-button>',
      '',
      '<ngx-eg-button [shape]="def" [icon]="icon"></ngx-eg-button>',
      '',
      '<ngx-eg-button [shape]="round" [icon]="icon"></ngx-eg-button>',
      ''
    ]
  },
  {
    name: 'example.component.ts',
    content: [
      'import { NgxEgButton } from \'ngx-eg-app\';',
      '',
      '@Component({',
      'selector: \'app-button\',',
      'imports: [NgxEgButton],',
      'templateUrl: \'./button.component.html\'',
      '})',
      'export class ExampleComponent {',
      '',
      'public icon = \'content_copy\';',
      'public label = \'Botão\';',
      'public round = \'round\';',
      'public def = \'default\';',
      '',
      '}'
    ]
  }
];
