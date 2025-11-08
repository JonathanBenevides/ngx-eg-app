export const POSITIONING_TOAST_FILE = [
  {
    name: 'example.component.html',
    content: [
      '<form [formGroup]="form">',
      '<ngx-eg-select [label]="\'Positioning\'" [options]="positions" formControlName="position">',
      '</ngx-eg-select>',
      '<ngx-eg-button [label]="\'Positioning\'" [disabled]="form.invalid" (click)="showPositioning()">',
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
      'public positions: Select[] = [',
      '{ value: \'top\', label: \'Top\' },',
      '{ value: \'middle\', label: \'Middle\' },',
      '{ value: \'bottom\', label: \'Bottom\' },',
      '];',
      '',
      'public form: FormGroup = new FormGroup({',
      'position: new FormControl(null, Validators.required)',
      '});',
      '',
      'constructor(private readonly toast: NgxEgToastService) { }',
      '',
      'public showPositioning(): void {',
      'const position = this.form.value.position.value;',
      'this.toast.show({',
      'message: \'Theming toast\', type: theme, position: position',
      '});',
      '}',
      '}'
    ]
  }
];