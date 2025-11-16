export const FORM_DOC_FILE = [
  {
    name: 'example.component.html',
    content: [
      '<form [formGroup]="form">',
      '<ngx-eg-toggle [label]="\'left\\/right\'" formControlName="toggle"></ngx-eg-toggle>',
      '<div style="margin-top: 1rem;">Value: {{ selection }}</div>',
      '</form>'
    ]
  },
  {
    name: 'example.component.ts',
    content: [
      'import { Component } from \'@angular/core\';',
      'import { NgxEgToggle } from \'ngx-eg-app\';',
      'import {',
      'FormControl,',
      'FormGroup,',
      'ReactiveFormsModule,',
      '} from \'@angular/forms\';',
      '',
      '@Component({',
      'selector: \'app-example\',',
      'imports: [NgxEgToggle, ReactiveFormsModule],',
      'templateUrl: \'./example.component.html\'',
      '})',
      'export class ExampleComponent {',
      '',
      'public form: FormGroup = new FormGroup({',
      'toggle: new FormControl(true),',
      '});',
      '}'
    ]
  }
];