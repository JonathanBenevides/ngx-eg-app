export const BUTTON_STYLE_FILES = [
  {
    name: 'example.component.html',
    content: [
      '<ngx-eg-button [fill]="clear" [label]="label"></ngx-eg-button>',
      '',
      '<ngx-eg-button [fill]="solid" [label]="label"></ngx-eg-button>',
      '',
      '<ngx-eg-button [fill]="outline" [label]="label"></ngx-eg-button>',
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
      'public solid = \'solid\';',
      'public clear = \'clear\';',
      'public outline = \'outline\';',
      'public label = \'Botão\';',
      '',
      '}'
    ]
  }
];
