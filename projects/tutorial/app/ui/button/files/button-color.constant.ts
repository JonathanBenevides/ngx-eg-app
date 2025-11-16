import { GENERIC } from './button.constant';

export const BUTTON_COLOR_FILES = [
  {
    name: 'example.component.html',
    content: [
      '<ngx-eg-button [color]="\'danger\'" [icon]="\'content_copy\'"></ngx-eg-button>',
      '',
      '<ngx-eg-button [color]="\'primary\'" [icon]="\'content_copy\'"></ngx-eg-button>',
      '',
      '<ngx-eg-button [color]="\'danger\'" [label]="\'Botão\'"></ngx-eg-button>',
      '',
      '<ngx-eg-button [color]="\'primary\'" [icon]="\'content_copy\'"></ngx-eg-button>',
      ''
    ]
  },
  {
    name: 'example.component.ts',
    content: GENERIC
  }
];
