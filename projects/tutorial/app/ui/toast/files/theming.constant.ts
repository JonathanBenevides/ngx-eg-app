export const THEMING_TOAST_FILE = [
  {
    name: 'example.component.html',
    content: [
      '<form [formGroup]="form">',
      '<ngx-eg-select [label]="\'Theming\'" [options]="options" formControlName="theming">',
      '</ngx-eg-select>',
      '<ngx-eg-button [label]="\'Theming\'" [disabled]="form.invalid" (click)="showTheming()">',
      '</ngx-eg-button>',
      '</form>'
    ]
  },
  {
    name: 'example.component.ts',
    content: [
      'import { Component } from \'@angular/core\';',
      'import {',
      'NgxEgToastService,',
      'NgxEgButton,',
      'Theming,',
      'NgxEgSelect,',
      'Select',
      '} from \'ngx-eg-app\';',
      'import { FormControl, FormGroup, ReactiveFormsModule } from \'@angular/forms\';',
      '',
      '@Component({',
      'selector: \'app-example\',',
      'imports: [NgxEgButton, NgxEgSelect, ReactiveFormsModule],',
      'templateUrl: \'./example.component.html\'',
      'providers: [NgxEgToastService],',
      '})',
      'export class ExampleComponent {',
      '',
      'public options: Select[] = [',
      '{ value: Theming.primary, label: \'Primary\' },',
      '{ value: Theming.danger, label: \'Danger\' },',
      '{ value: Theming.success, label: \'Success\' },',
      '{ value: Theming.warning, label: \'Warning\' },',
      '];',
      '',
      'public form: FormGroup = new FormGroup({',
      'theming: new FormControl(null, Validators.required)',
      '});',
      '',
      'constructor(private readonly toast: NgxEgToastService) { }',
      '',
      'public showTheming(): void {',
      'const theme = this.form.value.theming.value;',
      'this.toast.show({',
      'message: \'Theming toast\', type: theme',
      '});',
      '}',
      '}'
    ]
  }
];