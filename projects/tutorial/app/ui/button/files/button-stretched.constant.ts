export const BUTTON_STRETCHED_FILES = [
  {
    name: 'example.component.html',
    content: [
      '<ngx-eg-button [expand]="expand" [label]="label"></ngx-eg-button>',
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
      'public label = \'Botão\';',
      'public expand = \'block\';',
      '',
      '}'
    ]
  }
];
