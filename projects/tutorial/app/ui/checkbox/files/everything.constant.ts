export const EVERYTHING_FILE = [
  {
    name: 'example.component.html',
    content: [
      '<form [formGroup]="form">',
      '<ngx-eg-checkbox [label]="label" [errorMessage]="errorMessage" [hint]="hint" formControlName="checkbox">',
      '</ngx-eg-checkbox>',
      '</form>'
    ]
  },
  {
    name: 'example.component.ts',
    content: [
      'import { Component } from \'@angular/core\';',
      'import { NgxEgCheckBox } from \'ngx-eg-app\';',
      'import {',
      'FormBuilder,',
      'FormControl,',
      'FormGroup,',
      'ReactiveFormsModule,',
      'Validators',
      '} from \'@angular/forms\';',
      '',
      '@Component({',
      'selector: \'app-example\',',
      'imports: [NgxEgCheckBox, ReactiveFormsModule],',
      'templateUrl: \'./example.component.html\'',
      '})',
      'export class ExampleComponent {',
      '',
      'public label = \'Aceitar termos e condições\';',
      'public errorMessage = \'Aceite os termos e condições\';',
      'public hint = \'Marque esta caixa para aceitar\';',
      'public form!: FormGroup;',
      '',
      'constructor(private readonly fb: FormBuilder) {',
      'this.createForm();',
      '}',
      '',
      'public createForm(): void {',
      'this.form = this.fb.group({',
      'checkbox: new FormControl(null, Validators.requiredTrue)',
      '});',
      '}',
      '}'
    ]
  }
];