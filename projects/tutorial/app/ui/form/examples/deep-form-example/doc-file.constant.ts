export const DOC_FILE = [
  {
    name: 'example.component.html',
    content: [
      '<form [formGroup]="form">',
      '<ngx-eg-input [label]="\'Password\'" formControlName="password" [errorMessage]="{ passwordmismatch: \'I dont have validators, but the form does.\' }">',
      '</ngx-eg-input>',
      '<ngx-eg-input [label]="\'Confirm Password\'" formControlName="confirmPassword" [errorMessage]="{ passwordmismatch: \'I dont have validators, but the form does.\' }">',
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
      'import { passwordMatchValidator } from \'./validator\';',
      '',
      '@Component({',
      'selector: \'app-example\',',
      'imports: [NgxEgInput, ReactiveFormsModule],',
      'templateUrl: \'./example.component.html\'',
      '})',
      'export class ExampleComponent {',
      '',
      'public form: FormGroup = new FormGroup({',
      'password: new FormControl(),',
      'confirmPassword: new FormControl()',
      '});',
      '}'
    ]
  },
  {
    name: 'validator.ts',
    content: [
      'import { AbstractControl, ValidatorFn } from \'@angular/forms\';',
      '',
      'export function passwordMatchValidator(): ValidatorFn {',
      'return (control: AbstractControl): { [key: string]: boolean } | null => {',
      'const password = control.get(\'password\');',
      'const confirmPassword = control.get(\'confirmPassword\');',
      'if(password && confirmPassword && password.value !== confirmPassword.value) {',
      'const error = { passwordMismatch: true };',
      'password.setErrors(error);',
      'confirmPassword.setErrors(error);',
      'return error;',
      '}',
      'return null;',
      '};',
      '}'
    ]
  }
];