export const DOC_FILE = [
  {
    name: 'example.component.html',
    content: [
      '<form [formGroup]="form">',
      '<ngx-eg-input [label]="\'Password\'" [prefixIcon]="\'eye-off-outline\'" [suffixIcon]="\'eye-off-outline\'" formControlName="password">',
      '</ngx-eg-input>',
      '</form>'
    ]
  },
  {
    name: 'example.component.ts',
    content: [
      'import { Component } from \'@angular/core\';',
      'import { FormControl, FormGroup, ReactiveFormsModule } from \'@angular/forms\';',
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
      'password: new FormControl()',
      '});',
      '}'
    ]
  }
];