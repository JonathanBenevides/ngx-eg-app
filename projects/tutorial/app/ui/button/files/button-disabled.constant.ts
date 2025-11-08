import { GENERIC } from "./button.constant";

export const BUTTON_DISABLED_FILES = [
  {
    name: 'example.component.html',
    content: [
      '<ngx-eg-button [color]="\'danger\'" [disabled]="true" [icon]="\'content_copy\'"></ngx-eg-button>',
      '',
      '<ngx-eg-button [disabled]="true" [label]="\'Botão\'"></ngx-eg-button>',
      ''
    ]
  },
  {
    name: 'example.component.ts',
    content: GENERIC
  }
];
