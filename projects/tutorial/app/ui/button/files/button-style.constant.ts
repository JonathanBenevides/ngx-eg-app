import { GENERIC } from "./button.constant";

export const BUTTON_STYLE_FILES = [
  {
    name: 'example.component.html',
    content: [
      '<ngx-eg-button [fill]="\'clear\'" [label]="\'Botão\'"></ngx-eg-button>',
      '',
      '<ngx-eg-button [fill]="\'solid\'" [label]="\'Botão\'"></ngx-eg-button>',
      '',
      '<ngx-eg-button [fill]="\'Botão\'" [label]="\'Botão\'"></ngx-eg-button>',
      ''
    ]
  },
  {
    name: 'example.component.ts',
    content: GENERIC
  }
];
