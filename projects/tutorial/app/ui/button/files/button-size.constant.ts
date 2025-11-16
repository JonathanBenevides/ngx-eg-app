import { GENERIC } from './button.constant';

export const BUTTON_SIZE_FILES = [
  {
    name: 'example.component.html',
    content: [
      '<ngx-eg-button [size]="\'small\'" [label]="\'Botão\'"></ngx-eg-button>',
      '',
      '<ngx-eg-button [size]="\'default\'" [label]="\'Botão\'"></ngx-eg-button>',
      '',
      '<ngx-eg-button [size]="\'large\'" [label]="\'Botão\'"></ngx-eg-button>',
      ''
    ]
  },
  {
    name: 'example.component.ts',
    content: GENERIC
  }
];
