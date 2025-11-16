export const DOC_FILE = [
  {
    name: 'example.component.html',
    content: [
      '<form [formGroup]="form">',
      '<ngx-eg-input [label]="\'email\'" formControlName="email" [errorMessage]="{required: \'campo obrigatório\', pattern: \'email inválido\'}">',
      '</ngx-eg-input>',
      '</form>'
    ]
  },
  {
    name: 'example.component.ts',
    content: [
      'import { Component } from \'@angular/core\';',
      'import { FormControl, FormGroup, ReactiveFormsModule } from \'@angular/forms\';',
      'import { NgxEgInput, REQ_EMAIL } from \'ngx-eg-app\';',
      '',
      '@Component({',
      'selector: \'app-example\',',
      'imports: [NgxEgInput, ReactiveFormsModule],',
      'templateUrl: \'./example.component.html\'',
      '})',
      'export class ExampleComponent {',
      '',
      'public form: FormGroup = new FormGroup({',
      'email: new FormControl(\'\', REQ_EMAIL),',
      '});',
      '}'
    ]
  }
];