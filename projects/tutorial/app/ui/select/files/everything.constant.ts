export const EVERYTHING_FILE = [
  {
    name: 'example.component.html',
    content: [
      '<form [formGroup]="form">',
      '<ngx-eg-select [label]="label" [options]="options" [hint]="hint" [errorMessage]="errorMessage" formControlName="select">',
      '</ngx-eg-select>',
      `<ngx-eg-button [fill]="'outline'" [label]="'Clear'" (click)="onClear()">`,
      `</ngx-eg-button>`,
      '</form>'
    ]
  },
  {
    name: 'example.component.ts',
    content: [
      'import { NgxEgSelect } from \'ngx-eg-app\';',
      'import {',
      'FormBuilder,',
      'FormControl,',
      'FormGroup,',
      'ReactiveFormsModule,',
      'Validators',
      '} from \'@angular/forms\';',
      '',
      '@Component({',
      'selector: \'app-select\',',
      'imports: [NgxEgSelect, ReactiveFormsModule],',
      'templateUrl: \'./select.component.html\'',
      '})',
      'export class ExampleComponent {',
      '',
      'public label = \'Países\';',
      'public errorMessage = \'Escolha um país\';',
      'public hint = \'Selecione um país\';',
      'public form!: FormGroup;',
      '',
      'public options = [',
      '{ value: \'br\', label: \'Brasil\' },',
      '{ value: \'us\', label: \'Estados Unidos\' },',
      '{ value: \'es\', label: \'Espanha\' },',
      '];',
      '',
      'constructor(private readonly fb: FormBuilder) {',
      'this.createForm();',
      '}',
      '',
      'public createForm(): void {',
      'this.form = this.fb.group({',
      'select: new FormControl(null, Validators.required)',
      '});',
      '}',
      '',
      'public onClear(): void {',
      'this.form.reset();',
      '}',
      '}'
    ]
  }
];