export const N_OF_DIGITS_FILE = [
  {
    name: 'example.component.html',
    content: [
      '<form [formGroup]="form" (ngSubmit)="onSubmit()">',
      '<div>',
      '<ngx-eg-opt [digits]="6" [errorMessage]="{ required: \'campo obrigatório\', minlength: \'mínimo de 6 dígitos\'}" formControlName="opt">',
      '</ngx-eg-opt>',
      '</div>',
      '<ngx-eg-button [type]="\'submit\'" [disabled]="!!form.get(\'opt\')!.errors" [label]="\'Validate\'">',
      '</ngx-eg-button>',
      '</form>'
    ]
  },
  {
    name: 'example.component.ts',
    content: [
      'import { Component } from \'@angular/core\';',
      'import { NgxEgOptInput } from \'ngx-eg-app\';',
      'import {',
      'FormControl,',
      'FormGroup,',
      'ReactiveFormsModule,',
      'Validators',
      '} from \'@angular/forms\';',
      '',
      '@Component({',
      'selector: \'app-example\',',
      'imports: [NgxEgOptInput, ReactiveFormsModule],',
      'templateUrl: \'./example.component.html\'',
      '})',
      'export class ExampleComponent {',
      '',
      'public form: FormGroup = new FormGroup({',
      'opt: new FormControl(\'\', [Validators.required, Validators.minLength(6)])',
      '});',
      '',
      'public onSubmit(): void {',
      'console.log(this.form);',
      '}',
      '}'
    ]
  },
  {
    name: 'example.component.css',
    content: [
      'div,',
      'form {',
      'display: flex;',
      'flex-wrap: wrap;',
      'justify-content: center;',
      'align-items: center;',
      'width: 100%;',
      '}',
      '',
      'form {',
      'width: 500px;',
      'margin: auto;',
      'gap: 1rem;',
      '}',
    ]
  }
];