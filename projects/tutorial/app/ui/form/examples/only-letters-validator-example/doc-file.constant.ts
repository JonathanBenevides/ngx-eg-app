export const DOC_FILE = [
  {
    name: 'example.component.html',
    content: [
      '<form [formGroup]="form">',
      '<ngx-eg-input [label]="\'Letters\'" formControlName="letter" [errorMessage]="{required: \'campo obrigatório\', pattern: \'somente letras\'}">',
      '</ngx-eg-input>',
      '</form>'
    ]
  },
  {
    name: 'example.component.ts',
    content: [
      'import { Component } from \'@angular/core\';',
      'import { FormControl, FormGroup, ReactiveFormsModule } from \'@angular/forms\';',
      'import { NgxEgInput, REQ_LETTERS } from \'ngx-eg-app\';',
      '',
      '@Component({',
      'selector: \'app-example\',',
      'imports: [NgxEgInput, ReactiveFormsModule],',
      'templateUrl: \'./example.component.html\'',
      '})',
      'export class ExampleComponent {',
      '',
      'public form: FormGroup = new FormGroup({',
      'letter: new FormControl(\'\', REQ_LETTERS),',
      '});',
      '}'
    ]
  }
];