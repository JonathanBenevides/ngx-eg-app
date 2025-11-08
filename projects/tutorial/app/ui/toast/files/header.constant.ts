export const HEADER_TOAST_FILE = [
  {
    name: 'example.component.html',
    content: [
      '<ngx-eg-button [label]="\'Header\'" (click)="showHeader()"></ngx-eg-button>'
    ]
  },
  {
    name: 'example.component.ts',
    content: [
      'import { Component } from \'@angular/core\';',
      'import { NgxEgToastService, NgxEgButton, Theming } from \'ngx-eg-app\';',
      '',
      '@Component({',
      'selector: \'app-example\',',
      'imports: [NgxEgButton],',
      'templateUrl: \'./example.component.html\'',
      'providers: [NgxEgToastService],',
      '})',
      'export class ExampleComponent {',
      '',
      'constructor(private readonly toast: NgxEgToastService) { }',
      '',
      'public showHeader(): void {',
      'this.toast.show({ message: \'My message here.\', type: Theming.primary, header: \'Header\' });',
      '}',
      '}'
    ]
  }
];