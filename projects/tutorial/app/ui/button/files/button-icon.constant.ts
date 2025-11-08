import { GENERIC } from "./button.constant";

export const BUTTON_ICON_FILES = [
  {
    name: 'example.component.html',
    content: [
      '<ngx-eg-button [icon]="\'content_copy\'"></ngx-eg-button>',
      '',
      '<ngx-eg-button [icon]="\'content_copy\'" [label]="\'Botão\'"></ngx-eg-button>',
      '',
      '<ngx-eg-button [icon]="\'content_copy\'" [label]="\'Botão\'"></ngx-eg-button>',
      ''
    ]
  },
  {
    name: 'example.component.ts',
    content: GENERIC
  }
];
