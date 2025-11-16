import { GENERIC } from './button.constant';

export const BUTTON_FORMAT_FILES = [
  {
    name: 'example.component.html',
    content: [
      '<ngx-eg-button [shape]="\'default\'" [label]="\'Botão\'"></ngx-eg-button>',
      '',
      '<ngx-eg-button [shape]="\'round\'" [label]="\'Botão\'"></ngx-eg-button>',
      '',
      '<ngx-eg-button [shape]="\'default\'" [icon]="\'content_copy\'"></ngx-eg-button>',
      '',
      '<ngx-eg-button [shape]="\'round\'" [icon]="\'content_copy\'"></ngx-eg-button>',
      ''
    ]
  },
  {
    name: 'example.component.ts',
    content: GENERIC
  }
];
