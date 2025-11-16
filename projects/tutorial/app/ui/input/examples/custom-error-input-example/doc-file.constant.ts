export const DOC_FILE = [
  {
    name: 'example.component.html',
    content: [
      '<form [formGroup]="form">',
      '<ngx-eg-input [label]="\'Nome\'" [showCustomError]="!!form.get(\'name\')?.errors?.[\'minlength\'] && form.touched" [errorMessage]="\'Campo obrigatório\'" formControlName="name">',
      '@if (form.get(\'name\')?.errors?.[\'minlength\'] && form.touched) {',
      '<span style="color: rgb(255, 166, 0);">Minha mensagem de erro customizada</span>',
      '}',
      '</ngx-eg-input>',
      '</form>'
    ]
  },
  {
    name: 'example.component.ts',
    content: [
      'import { Component } from \'@angular/core\';',
      'import {',
      'FormControl,',
      'FormGroup,',
      'ReactiveFormsModule,',
      'Validators',
      '} from \'@angular/forms\';',
      'import { NgxEgInput } from \'ngx-eg-app\';',
      '',
      '@Component({',
      'selector: \'app-example\',',
      'imports: [NgxEgInput, ReactiveFormsModule],',
      'templateUrl: \'./example.component.html\'',
      '})',
      'export class ExampleComponent {',
      '',
      'public form: FormGroup = new FormGroup({',
      'name: new FormControl(\'\', [Validators.required, Validators.minLength(10)]),',
      '});',
      '}'
    ]
  }
];