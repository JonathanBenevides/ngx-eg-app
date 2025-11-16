export const DOC_FILE = [
  {
    name: 'example.component.html',
    content: [
      '<form [formGroup]="form">',
      '<ngx-eg-input [label]="\'Clearable\'" [buttonAction]="\'clearAction\'" formControlName="clear">',
      '</ngx-eg-input>',
      '<ngx-eg-input [label]="\'Multiple\'" [buttonAction]="[\'copyAction\', \'searchAction\']" (search)="onSearch()" formControlName="multiple">',
      '</ngx-eg-input>',
      '</form>',
      '@if (search) {',
      '<div>{{ form.value.multiple | json }}</div>',
      '}'
    ]
  },
  {
    name: 'example.component.ts',
    content: [
      'import { Component } from \'@angular/core\';',
      'import { JsonPipe } from \'@angular/common\';',
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
      'multiple: new FormControl()',
      '});',
      '',
      'public search = false;',
      '',
      'public onSearch():void {',
      'this.search = !this.search;',
      '}',
      '}'
    ]
  }
];