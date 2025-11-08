export const LOADING_FILE = [
  {
    name: 'example.component.html',
    content: [
      '<ngx-eg-header [title]="\'Title\'" [isLoading]="true"></ngx-eg-header>'
    ]
  },
  {
    name: 'example.component.ts',
    content: [
      'import { Component } from \'@angular/core\';',
      'import { NgxEgHeader } from \'ngx-eg-app\';',
      '',
      '@Component({',
      'selector: \'app-example\',',
      'imports: [NgxEgHeader],',
      'templateUrl: \'./example.component.html\'',
      '})',
      'export class ExampleComponent {}'
    ]
  }
];