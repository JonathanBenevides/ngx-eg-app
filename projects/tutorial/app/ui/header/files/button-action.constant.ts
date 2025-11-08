export const BUTTON_ACTIONS_FILE = [
  {
    name: 'example.component.html',
    content: [
      '<ngx-eg-header [title]="\'Title\'" [isLoading]="isLoading" [actions]="actions"></ngx-eg-header>'
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
      'export class ExampleComponent {',
      '',
      'public isLoading = true;',
      '',
      'public actions: HeaderButtonAction[] = [',
      '{',
      'icon: \'notifications\',',
      'click: () => this.action(),',
      'ariaLabel: \'string\'',
      '},',
      '{',
      'icon: \'settings\',',
      'click: () => this.action(),',
      'ariaLabel: \'string\',',
      'role: \'button\'',
      '}',
      '];',
      '',
      'public action(): void {',
      'this.isLoading = !this.isLoading;',
      '}',
      '}'
    ]
  }
];